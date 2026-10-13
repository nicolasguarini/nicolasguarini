---
title: "Reward is not skill"
excerpt: "I trained twelve reinforcement learning agents to drive in simulation. The reward an agent earns and the quality of its driving turned out to be two different things, and mistaking one for the other explains most of the failures."
publishedAt: "2025-01-25T12:30:00.000Z"
categories: ["Machine Learning","University"]
---

During my Erasmus semester at Stockholm University, this project trained reinforcement learning agents to drive in simulation. The setup was small: the [highway-env](https://github.com/Farama-Foundation/HighwayEnv) simulator, three algorithms, four traffic scenarios, and a few evenings of training on my macbook. The original objective was to determine which algorithm drives best. The actual result was that the reward an agent earns and the quality of its driving are two distinct quantities, and mistaking one for the other accounts for most of the observed failure.

## The setup

The environment is highway-env, a collection of driving scenarios built on the Gym interface. Four were selected: a five-lane highway, a roundabout, a highway merge, and an unregulated intersection.

![The highway scenario: five lanes of one-way traffic.](/content/reward-is-not-skill/drl-highway-scenario.png)

*The highway scenario: five lanes of one-way traffic.*

![The roundabout scenario: a two-lane circle with four one-way roads.](/content/reward-is-not-skill/drl-roundabout-scenario.png)

*The roundabout scenario: a two-lane circle with four one-way roads.*

![The merge scenario: an access ramp joining a two-lane highway.](/content/reward-is-not-skill/drl-merge-scenario.png)

*The merge scenario: an access ramp joining a two-lane highway.*

![The intersection scenario: four one-way roads crossing with no signals.](/content/reward-is-not-skill/drl-intersection-scenario.png)

*The intersection scenario: four one-way roads crossing with no signals.*

Each agent controls a car through a discrete action space of five moves: change lane left, change lane right, accelerate, decelerate, and do nothing. The reward function is simple: it rewards speed within limits and staying in the rightmost lane, and it penalizes collisions.

Three algorithms were trained on each scenario, twelve agents in total: DQN, the oldest and simplest of the three; A2C, an actor-critic method; and PPO, the current default in most practical reinforcement learning work. All three came from stable-baselines3, all trained for 40,000 timesteps with the same network architecture. The algorithms were placed on equal footing and evaluated on the same scenarios.

## The reward function as specification

The agents do not attempt to drive well; they maximize a scalar. That scalar is intended to represent good driving, and every gap between the two is exploited.

DQN on the highway is the clearest example. It finished with a high average reward, second only to PPO, and drove at high speed. Its crash rate was 75 percent. On a clear road DQN accelerates fully, because speed is rewarded and nothing in its immediate observation indicates otherwise. When a slower car appears in the distance it does not brake early enough and collides with traffic or runs out of room to change lanes. It maximized the speed term of the reward and internalized the collision penalty too late. The high reward corresponds to poor driving.

![Reward during training on the highway. DQN and PPO climb together; the curve does not indicate DQN's 75 percent crash rate.](/content/reward-is-not-skill/drl-highway-reward.png)

*Reward during training on the highway. DQN and PPO climb together; the curve does not indicate DQN's 75 percent crash rate.*

A2C found a different exploit. In several scenarios it learned to drive slowly in the right lane and take almost no action. This is a stable strategy: a modest speed reward, low risk, few collisions. In the merge scenario A2C posted the highest average reward of the three. It achieved this by maintaining the right lane at the speed of the surrounding traffic, without ever making room for the car merging from the ramp. The task was to solve the merge; the reward was satisfied by ignoring it.

![Reward during training on the merge. A2C ends highest here, but only because passive driving in the right lane is sufficient to satisfy the reward.](/content/reward-is-not-skill/drl-merge-reward.png)

*Reward during training on the merge. A2C ends highest here, but only because passive driving in the right lane is sufficient to satisfy the reward.*

## PPO

PPO behaved differently. On the highway it maintained a steady speed close to that of the surrounding traffic and changed lanes in advance when congestion formed. At the roundabout it slowed on approach, yielded to cars already inside, and moved to the inner lane when the outer one was about to be occupied. The metrics agree with the behavior: the highest reward on the highway with an 18 percent crash rate, against DQN's 75 percent, and near the top in the other scenarios.

The cause is mechanical. PPO's clipped updates keep the policy from taking large, destructive steps, so it accumulates a balanced strategy instead of committing to the first reward exploit it finds. A2C's variance and DQN's single-minded Q-value maximization are both more prone to the shortcuts described above. The gap in reward is small; the gap in driving behavior is not.

## The intersection

The intersection was the most demanding scenario, and none of the three solved it. The maximum reward is 10, earned by completing a left turn while yielding and avoiding collisions. All three agents stabilized around 4 or 5, with crash rates between 41 and 55 percent. A large share of those crashes were not attributable to the agent: other simulated cars collided with each other, terminating episodes before the agent could learn from them.

This is what a reward curve conceals. On paper the intersection appears to be a hard scenario in which every agent plateaus. It is also a chaotic one: for much of each episode the agent is a passive observer of collisions it did not cause. Forty thousand timesteps and a discrete action space were insufficient, and the conclusion is that some scenarios require more than a different algorithm; they require a different setup.

![Reward during training on the intersection. All three agents plateau around 4 or 5; the curve does not reflect the collisions between other cars that account for much of it.](/content/reward-is-not-skill/drl-intersection-reward.png)

*Reward during training on the intersection. All three agents plateau around 4 or 5; the curve does not reflect the collisions between other cars that account for much of it.*

## Conclusions

The main lesson is that reward and skill diverge, and that evaluation must measure both. Total reward placed DQN nearly as good as PPO on the highway; the crash rate did not. Average reward indicated that A2C solved the merge; the behavior showed that it had found a low-risk way to avoid the problem. Reporting the reward curves alone would have yielded a false conclusion.

The second lesson is that simple baselines remain competitive. DQN, the least sophisticated of the three, performed consistently well and matched PPO almost exactly on the roundabout. Added complexity buys stability and realism, not automatic superiority.

The third is that the informative results are the failures. The agents that exploited the reward revealed more about reward design than the ones that drove well. Every gap between the reward function and the intended task is a place where an agent will find a shortcut, and identifying those shortcuts before deployment is the central task.

Training a car in a simulator is far from deploying one on a street, but the underlying problem is the same as in any system graded by a proxy metric: the metric becomes the goal, and the goal diverges from the intended objective. Any system scored by a single number should be evaluated both on that number and on its behavior.

The code, the trained models and the full metrics are in the repository: [github.com/nicolasguarini/drl-autonomous-driving-evaluation](https://github.com/nicolasguarini/drl-autonomous-driving-evaluation).
