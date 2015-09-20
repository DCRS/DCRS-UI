# Modern "Bios"


----------
# Description #

When start the device, this firmware/runtime/kernel/system will do the first work like a BIOS does: verifying all device's components.

**But this is very different than a BIOS!** When finish the hardware check, this system will search for operating systems installed in all connected storage devices. Then, this kernel will run an single OS installed or show an boot-selector screen for selecting OS to run from each storage device, and will run the interface of OS working as an kernel/runtime. With this, you will can easily bootoff OS A and go to OS B, with multi-OS running at the same time! You can know more at SPECS.md file, included in this project. This "BIOS" will can adapt the code/design for work in all possible resolutions, for an multi-device connected future.

Yes, this firmware is an kernel/runtime that uses interface in HTML5/CSS/JavaScript and compatible only with UEFI-based mainboards and modern operating systems compatible with the technology of this firmware.

How will work modern operating systems compatible with this firmware? I'ts simple. As base specs, an modern OS will need to be writen in HTML5+Javascript, and contain a splash/boot screen for loading the system page of OS, and, obviously, the referred system page. All the modern OS will use Javascript codes with commands that will be recognized by the kernel of this firmware.

You can start understanding an modern OS or making your own at [this project hosted on GitHub](https://github.com/DaniellMesquita/Modern-OS).

> You **is** permited to edit this source code for submit changes to project and/or use your own logo for put this firmware in your mainboard/device for free. Commercial usage of this firmware in your products **is allowed**.
> 
> You **isn't** permited to create your own project based on the source-code of this project. Learn more at LICENSE.md file, included in the project code.
> 
> All these freedoms/conditions may change in the future and you agree with this when using it.

# Contributing #