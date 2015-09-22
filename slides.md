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

## Unikernel

- Operating system + your app as one!
- Only the code needed
- Single process
- Single address space

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

### Traditional Multiuser OS

- Originally designed for terminal access
- Arrived on desktops in mid 90s
- Used in the "cloud" (aka the Internet)

---

## On software size

- *Super* productive programmer: 1,000 LOC per week
- Small app: 10Ks
- Medium to large apps: 100Ks
- Really huge apps: 1Ms

---

#### Linux Kernel - Millions of SLOC

<div id="linux-kernel-sloc"></div>

---

#### Debian - Millions of SLOC

<div id="debian-sloc"></div>

---

#### Language Use in Debian

<img src="language-cloud-2.png">

---

# So?

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

#### Default OS Processes and Threads

<img height="400" src="os-processes.png">

Zvi Avraham - Erlang User Conference 2015

---

#### Kernel Image Size (MB)

<div id="kernel-sizes"></div>

Zvi Avraham - Erlang User Conference 2015

---

#### Kernel Boot Time

<img src="domain-boot.png">

Unikernels: Library Operating Systems for the Cloud

---

#### Thread Creation Time

<img src="threads.png">

Unikernels: Library Operating Systems for the Cloud

---

#### Block Read Throughput

<img src="reads.png">

Unikernels: Library Operating Systems for the Cloud

---

## [zerg.erlangonxen.org](http://zerg.erlangonxen.org)

---

## It's all about<br><strike>performance</strike> security

---

<img height="500" src="mrrobot.jpg">

---

<img height="500" src="mmfr.jpg">

---

## And also architecture

- Start small, stay small
- True black box design
- Distributable
- Tolerant of outages

---

## Possible Applications

- Something small (in a good way)
- Analytic engines
- Routers
- Monitors

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
- OSv (Java, posix)
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

---

<img height="500" src="citycode.png">


<!-- MAYBE STUFF


---

# Code Reuse

---

## Inbreeding

<img height="500" src="inbreeding.jpg">

-->
