---
name: "quantum-modular-exponentiation"
type: "personal"
excerpt: "Quantum implementation of the Modular exponentiation problem of computing the value X^Y mod N for given positive integers X, Y and N."
service: "Quantum Programming"
categories: ["quantum-programming","modular-exponentiation","shors-period-finding"]
startedDate: "2025-01-01"
finishedDate: "2025-01-26"
url: "https://github.com/nicolasguarini/qprog-modular-exponentiation"
updatedAt: "2025-02-22T09:14:17Z"
featuredImage: "/content/quantum-modular-exponentiation/957606cc4cb0ed56279bc4a2a756b208f3d177b6.png"
---

Modular exponentiation is the problem of computing the value 

$$
X^Y \text{ mod } N
$$

for given positive integers X, Y and N.

Modular exponentiation is a central subroutine of Shor’s period  
finding algorithm, which by its turn is used for integer factorization. In this project, we implemented a quantum circuit for modular exponentiation from scratch. The implementation should was done using python and qiskit.

Implemented functions:

- `set_bits(A, X)`:  initializes the bits of register A with the binary string X;
- `copy(A, B)`: copies the binary string A to register B;
- `full_adder(...)`: implements a full adder;
- `add(A, B, R)`: circuit that adds A to B and stores the result at register R;
- `subtract(A, B, R)`: circuit that subtracts B from A and stores the result at register R;
- `greater_than(A, B, r)`: implements a circuit that tests whether A is greater than B, storing the result in register r;
- `add_mod(N, A, B, R)`:  implements a circuits that adds A to B modulo N. The result is stored at register R;
- `times_two_mod(N, A, R)`: implements a circuit that doubles A modulo N;
- `times_two_power_mod(N, A, k, R)`:  implements a circuit that multiplies A by 2^k modulo N;
- `multiply_mod(N, A, B, R)`: implements a circuit that multiplies A with B modulo N;
- `multiply_mod_fixed(N, X, B)`:  implements a circuit that multiplies B by a fixed number X modulo N. The caveat is that the multiplication should be done in place.
- `multiply_mod_fixed_power_2_k(N, X, B, k)`: implements a circuit that multiplies B by X^2^k modulo N;
- `multiply_mod_fixed_power_Y(N, X, B, Y)`: implements a circuit that multiplies B by X^Y modulo N, where Y is a given n-bit number.
