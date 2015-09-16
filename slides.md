<style>
.reveal section img {border:none; background:none;box-shadow:none}
.reveal h3 {line-height:1.4;font-size:2.1em}
.reveal h4 {line-height:1.2;font-size:1.6em}
span.sm {font-size:0.7em}
</style>

<img height="500" src="citycode.png">

---

## Unikernels?

<img height="500" src="unicorn.jpg">

---

<img height="500" src="ustack-1.png">

---

<img height="500" src="ustack-2.png">

---

<img height="500" src="ustack-3.png">

---

<img height="500" src="ustack-4.png">

---

## Unikernel

- Application Code
- Unikernel Runtime
- Unikernel Device Drivers

---

# That's It!

---

<img height="500" src="ostack.png">

---

### In July 2013 Linux kernel had<br>15,803,499 lines of code

---

### Two years later it<br>had grown to 19.5M

---

### OpenSSL has 436,386<br>lines of code

---

### It's used by two thirds<br>of all web servers

---

<img height="500" src="heartbleed.png">

---

# Code Reuse

---

## Inbreeding

<img height="500" src="inbreeding.jpg">

---

## The Problem

- Active software stacks rely on tens upon tens of millions LOC
- Much of which is written in C
- And shared universally
- And written before the Age of Hypervisors

---

## The Age of Hypervisors

---

## Hyper what now?

- Something that creates and runs a Virtual Machine
- Invented in the 1960s, of course
- Can be bare metal or hosted
- Motivation primarily to utilize hardware

---

<img height="500" src="hypervisors.png">

---

### Emergence of Hypervisors

- Coming of age in early 2000s
- Initially expensive, steadily more affordable
- Improved hardware support
- Open source alternatives
- Cloud

---

### Hypervisors Today

```
$ aws ec2 run-instances --image-id ami-5da964c3
```

---

### Hypervisors Today

```
$ vagrant up
```

---

### Looks fancy<br>How do you use it?

<img height="400" src="server.png">

---

### <span class="sm">Option 1</span><br>Multiuser System

<img height="400" src="stack-alt-1.png">

---

### <span class="sm">Option 2</span><br>Multiple Multiuser Systems

<img height="400" src="stack-alt-2.png">

---

### <span class="sm">Option 3</span><br>Multiple Unikernels

<img height="400" src="stack-alt-3.png">

---

### Hypervisor is the new kernel

---

### Unikernel is the new `libc`

---

# Who cares?

---

<img src="mrrobot.jpg">

---

## A Clean Break

- High level languages
- Modern type systems
- Modern compilers

---

## New Opportunity

- Green fields
- Start small, stay small
- Security as first class citizen

---

## At a Cost

<img height="500" src="rebuilding.jpg">

---

## TODO: Security stuff

- Compilers remove unused code -- *completely*
- Static compilation of *everything* (think Go to the extreme!!)
- Sealing

---

## TODO: Unikernel ecosystems

---

## TODO: what about performance? Meh - maybe, maybe not

- Show stat on network throughput

---

## TODO: Unikernel projects

---

## TODO: Summary of actual value

- Security, security, security (use black swan)
- Architectural (start small, stay small) (federated diagram)
    - Start small, stay small
    - True black box design
    - Tolerant of outages

---

## TODO: application examples

- On demand thing - using a router to launch kernels on demand - ala
CGI or fast CGI

The difference between unikernels and CGI is in degree of isolation
and security.

Extend the story of no-shared-memory to no shared disk. No shared
IO. No contention whatsoever within the virtual machine.

Everything has to be message passing

Upside is distribution. Federation, resulting in fault tolerant
systems and evolvable systems.

Other examples:

- Calculation engines (traders, e.g.)
-

---

## TODO: reality checks

- Hard to get into - strike that, very hard
- We're coming out of proof-of-concept
- Next will be platform support and apps - separate tracks
- After that will be experience and maturity
- That's a long ways off

---

## Where do I sign up?

- Learn a new language within an interesting context
- Solve one really simple specific problem
- Go from there

---

## Discussion

<img height="300" src="unicorn.jpg">

#### @gar1t on Twitter

---

<img height="500" src="citycode.png">
