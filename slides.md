<style>
.reveal .ct-label {color:white; font-size:75%;}
</style>

<img height="500" src="citycode.png">

---

## Unikernels?

<img height="500" src="unicorn.jpg">

---

<img style="margin-top:100px" height="400" src="server.png">

---

<img height="500" src="ustack-2.png">

---

<img height="500" src="ustack-3.png">

---

<img height="500" src="ustack-4.png">

---

#### Multiuser OS

<img height="500" src="ostack-1.png">

---

#### Multiuser OS

<img height="500" src="ostack-2.png">

---

#### Multiuser OS

<img height="500" src="ostack-3.png">

---

#### Multiuser OS

<img height="500" src="ostack-4.png">

---

#### Multiuser OS

<img height="500" src="ostack-5.png">

---

#### Multiuser OS

<img height="500" src="ostack-6.png">

---

#### Multiuser OS

<img height="500" src="ostack-7.png">

---

## Unikernel

- Application Code
- Unikernel Runtime
- Unikernel Device Drivers

---

# That's It!

---

#### Linux Kernel - Lines of Code

<div id="linux-kernel-sloc"></div>

---

#### Debian - Lines of Code

<div id="debian-sloc"></div>

---

<img src="language-cloud.png">

---

### OpenSSL has 436,386<br>lines of code

---

### It's used by two thirds<br>of all web servers

---

<img height="500" src="heartbleed.png">

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

### How do I *really* use this thing?

<img height="400" src="server.png">

---

### <span class="sm">Option 1</span><br>Bare Meta + Multiuser OS

<img height="400" src="stack-alt-1.png">

---

### <span class="sm">Option 2</span><br>VMs + Multiuser OS

<img height="400" src="stack-alt-2.png">

---

### <span class="sm">Option 3</span><br>VMs + Unikernels

<img height="400" src="stack-alt-3.png">

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

# But the Upside...

---

### A smartly compiled unikernel<br>can eliminate *all* dead code

---

### 100% statically compiled

---

### Can be sealed against modification at runtime!

---

### Strict buffer overflow controls

<!--
http://blog.klocwork.com/software-security/buffer-overflows-are-the-top-software-security-vulnerability-of-the-past-25-years/
-->

---

## "But will it scale?"

---

<img height="500" src="domain-boot.png">

---

<img height="500" src="async-boot.png">

---

<img height="425" src="threads.png">

---

<img height="500" src="reads.png">

---

## [zerg.erlangonxen.org](http://zerg.erlangonxen.org)

---

## Unikernel Projects

- MirageOS (OCaml)
- LING (Erlang)
- HaLVM (Haskell)
- OSv (multiple)
- Sort of: Rump Kernels, ClickOS, Clive

---

<img height="500" src="complicated.png">

---

## Let's break it down...

---

## It's the security, stupid<br><span class="sm">Black Swan</span>

---

## It's also the architecture

- Start small, stay small
- True black box design
- Distributable
- Tolerant of outages

---

## Applications

- Something small (in a good way)
- Analytic engines
- Routers
- Monitors

---

<img height="500" src="slowdown.gif">

---

### Reality Checks

- Hard to get into - strike that, very hard
- Coming out of proof-of-concept
- Next, applications, improved platform support
- After that, experience and maturity

---

## Just do it!

- Learn a new language within an interesting context
- Solve one really simple specific problem
- Go from there

---

## Discussion

<img height="300" src="unicorn.jpg">

#### @gar1t on Twitter

---

<img height="500" src="citycode.png">


<!-- MAYBE STUFF


---

# Code Reuse

---

## Inbreeding

<img height="500" src="inbreeding.jpg">

-->
