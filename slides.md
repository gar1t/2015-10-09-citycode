<style>
.reveal .ct-label {color:white; font-size:75%;}
</style>

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

## Unikernel

- Operating system + your app as one!
- Runs on bare metal or hypervisor
- Contains only what's used
- Single process and address space

---

#### Traditional Multiuser OS

<img height="500" src="ostack-1.png">

---

#### Traditional Multiuser OS

<img height="500" src="ostack-2.png">

---

#### Traditional Multiuser OS

<img height="500" src="ostack-3.png">

---

#### Traditional Multiuser OS

<img height="500" src="ostack-4.png">

---

#### Traditional Multiuser OS

<img height="500" src="ostack-5.png">

---

#### Traditional Multiuser OS

<img height="500" src="ostack-6.png">

---

#### Traditional Multiuser OS

<img height="500" src="ostack-7.png">

---

### Our Unikernel (again)

<img height="500" src="ustack-4.png">

---

### Traditional Multiuser OS

- Originally designed for human based terminal access
- Arrived on desktops in mid 90s
- Used in the "cloud" (aka the Internet)

---

# So?

---

## On software size

- Small app: 10Ks
- Medium to large apps: 100Ks
- Really huge apps: 1Ms

---

#### Linux Kernel - Millions of SLOC

<img height="500" src="kernel-loc.png">

---

#### Debian - Millions of SLOC

<img height="500" src="debian-loc.png">

---

#### Language Use in Debian

<img src="language-cloud-2.png">

---

# Again, so?

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

## [zerg.erlangonxen.org](http://zerg.erlangonxen.org)

---

## "I'm a total <strike>speed</strike><br>security junkie"

---

<img height="600" src="mrrobot.jpg">

---

<img height="600" src="mmfr.jpg">

---

## Architectural Wins

- Start small, stay small
- True black box design
- Distributable
- Tolerant of outages

---

## Possible Applications

- Something small and focused
- Analytic/computational engines
- Networking routers
- Monitors, auditors

---

## Reality Checks

- <strike>Hard</strike> Very hard to get into
- Emerging from proof-of-concept phase
- Next: applications, improved platform support
- After that: experience and maturity

---

## Unikernel Projects

- MirageOS (OCaml)
- LING (Erlang)
- HaLVM (Haskell)
- OSv (JVM, posix)
- Sort of: Rump Kernels, ClickOS, Clive

---

## Just do it!

- Learn a new language within an interesting context
- Solve one really simple specific problem
- Go from there

---


## Discussion

<img height="300" src="unicorn.jpg">

#### @gar1t on Twitter
