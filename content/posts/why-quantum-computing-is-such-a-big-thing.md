---
title: "Why Quantum Computing is such a big thing"
excerpt: "Quantum Programming is one of the most exciting courses I’m taking in Stockholm. Quantum computers can revolutionize fields like cybersecurity, where they could break current encryption algs like RSA, and science, allowing us to simulate molecular interactions and discover new drugs in ways classical computers simply can’t."
publishedAt: "2024-11-11T09:51:00.000Z"
updatedAt: "2025-03-09T18:14:17Z"
categories: ["University"]
---

One of the courses I’m attending during my Erasmus in Stockholm is Quantum Programming, which turned out to be one of the most exciting classes I’ve ever taken. Quantum computing is a field that’s been creating a lot of hype, and for good reason: it transform the way we approach computing and complex problems.



The core difference between quantum and classical computers lies in the fundamental unit of data they use. While classical computers rely on bits, units that represent either a 0 or a 1, quantum computers use *qubits*, which can represent 0, 1, or any combination of both at the same time. This property, known as **superposition**, allows quantum computers to explore multiple possibilities simultaneously. 

Mathematically, a qubit’s state can be expressed as 

$$
|\psi\rangle = \alpha|0\rangle + \beta|1\rangle
$$

where α and β are complex numbers that determine the likelihood of the qubit collapsing to 0 or 1 when measured. This flexibility lets quantum computers process an enormous amount of data in parallel, enabling them to solve certain problems exponentially faster than classical systems.

Another unique feature of quantum computing is **entanglement**. When qubits become entangled, the state of one qubit instantly influences the state of another, no matter the distance between them. This creates a type of correlation that classical computers can’t replicate. Entangled qubits allow quantum computers to perform complex calculations with fewer steps because multiple qubits can effectively act as a single unit, processing information in ways that would require vast resources on a classical computer.

Quantum computers utilize **quantum gates**, which manipulate qubits in ways that aren’t possible with classical logic gates (like AND, OR, or NOT). Quantum gates operate by rotating and entangling qubits, using mathematical operations such as phase shifts or controlled not (CNOT) gates. A single quantum gate can create a superposition or entanglement, enabling computations that would require extensive parallelism on classical hardware. This difference in logic—moving from binary 0/1 gates to quantum gates that exploit probability and correlation—gives quantum computing its distinct advantage for specific tasks.

These characteristics (superposition, entanglement, and quantum gates) together enable quantum computers to handle problems that would take classical computers millions of years to solve. However, they also introduce specific challenges: qubits are sensitive and prone to “decoherence,” or losing their quantum state due to environmental interference. Keeping qubits stable requires extreme conditions, like ultra-low temperatures, and even slight vibrations can disrupt computations. Overcoming these challenges is what makes building reliable quantum computers so difficult.

### Why Should We Care?

Quantum computing’s power isn’t just about speed, it’s about solving problems that classical computers physically can’t handle. One of the most talked applications is the potential to break RSA encryption, which currently underpins the security of the entire internet. RSA works by relying on the difficulty classical computers have in factoring very large numbers; this task is so demanding for traditional machines that it would take them hundreds of years to break a strong RSA key. But quantum computers, thanks to **Shor’s Algorithm**, approach factoring in a completely different way. Instead of brute-forcing through potential factors, Shor’s Algorithm leverages the quantum property of superposition to factorize large numbers exponentially faster. This means that once quantum computers become powerful enough, they could make RSA obsolete almost overnight, leaving most of our data suddenly vulnerable. As a result, there’s a race to create “quantum-safe” encryption methods, a field that’s seeing rapid development and investment due to the potential threat quantum computing poses.

Another massive area is scientific simulation, particularly in quantum chemistry and materials science. Many molecules and materials behave in ways that are inherently quantum, with interactions that classical computers can’t simulate effectively. Quantum computers, however, are built on the same principles and can simulate these complex interactions natively, which could lead to breakthroughs in drug discovery, materials science, and even climate science.

Quantum computing could also open up new frontiers in the world of AI. Many AI algorithms rely on heavy-duty linear algebra, things like matrix operations and eigenvalue calculations. Quantum algorithms are particularly good at these tasks, meaning quantum computers could process massive datasets or optimize AI models far faster than classical computers.

### Clearing Up Some Myths

There’s a lot of hype around quantum computing, but it’s not a magic box that makes everything faster. Quantum computers excel at specific types of problems, not every problem under the sun. And while you don’t need to be a quantum physicist to understand quantum computing, it does help to have some math chops. Once you get comfortable with concepts like superposition, entanglement, and operators, you’re well on your way.

### The Tech Behind It

Building a quantum computer is no small feat. Qubits are highly sensitive to their environment and can lose their state through a process called **decoherence**. That’s why these machines need to operate at extremely low temperatures. Countries and companies are investing billions to overcome these hurdles. Sweden, for example, is working on a 25-qubit computer at Chalmers University, with a goal of reaching 100 qubits by 2029.

### How We Program Quantum Computers

Quantum programming is like working with circuits, where you string together operations called “gates” that manipulate qubits. Some gates, like the **Hadamard gate**, are used to put qubits in superposition, while others like **CNOT** create entanglement between them. Unlike coding in Python or Java, programming quantum computers requires a new mindset: it’s less about procedural logic and more about setting up quantum states and letting them evolve.
