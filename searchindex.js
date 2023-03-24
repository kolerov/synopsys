Search.setIndex({"docnames": ["buildroot/build", "buildroot/config", "buildroot/index", "environment/index", "environment/linux", "environment/wsl", "index", "qemu/build", "qemu/index", "qemu/using", "qemu/verification/csmith", "qemu/verification/dejagnu", "qemu/verification/state", "snippets/gcc", "snippets/gdb", "snippets/git", "snippets/index", "tasks/binutils_file_bug", "tasks/ebpf_jit/ebpf_jit", "tasks/glibc_mmu_bug", "tasks/index", "tasks/qemu_stack_ops", "toolchain/build-dev", "toolchain/build-prod", "toolchain/index"], "filenames": ["buildroot/build.rst", "buildroot/config.rst", "buildroot/index.rst", "environment/index.rst", "environment/linux.rst", "environment/wsl.rst", "index.rst", "qemu/build.rst", "qemu/index.rst", "qemu/using.rst", "qemu/verification/csmith.rst", "qemu/verification/dejagnu.rst", "qemu/verification/state.rst", "snippets/gcc.rst", "snippets/gdb.rst", "snippets/git.rst", "snippets/index.rst", "tasks/binutils_file_bug.rst", "tasks/ebpf_jit/ebpf_jit.rst", "tasks/glibc_mmu_bug.rst", "tasks/index.rst", "tasks/qemu_stack_ops.rst", "toolchain/build-dev.rst", "toolchain/build-prod.rst", "toolchain/index.rst"], "titles": ["Build Linux images", "Buildroot configuration", "Buildroot", "Environment", "Linux", "WSL", "Yuriy Kolerov\u2019s documentation", "Building QEMU", "QEMU", "Building and running binaries", "Verification by generating random programs", "DejaGnu tests", "Verification by comparing states", "GCC", "GDB", "Git", "Snippets", "\ud83d\udfe2 <code class=\"docutils literal notranslate\"><span class=\"pre\">.file</span></code> directive does not work as intended", "\ud83d\udfe1 eBPF in Linux for ARC", "\ud83d\udfe1 glibc testsuite fails with vanilla Linux kernels", "Tasks", "\ud83d\udfe1 Some stack operations are not presented in QEMU", "Building from <code class=\"docutils literal notranslate\"><span class=\"pre\">arc-gnu-toolchain</span></code>", "Building from <code class=\"docutils literal notranslate\"><span class=\"pre\">crosstool-ng</span></code>", "GNU Toolchain"], "terms": {"manual": [0, 17], "http": [0, 4, 5, 7, 10, 11, 15, 17, 18, 19, 22, 23], "org": [0, 4, 7, 18], "download": [0, 5, 18], "html": 0, "train": 0, "bootlin": 0, "com": [0, 4, 5, 7, 11, 15, 17, 18, 19, 22, 23], "doc": [0, 15, 18], "slide": 0, "pdf": 0, "prerequisit": 0, "packag": [0, 4, 5, 8, 18], "can": [0, 4, 5, 7, 10, 17, 18, 19, 21, 22, 23], "instal": [0, 3, 8, 19, 22, 23], "ubuntu": [0, 3, 8], "22": [0, 3, 18], "04": [0, 3], "follow": [0, 5, 15], "command": [0, 5, 10, 12, 13, 14, 17, 18], "sudo": [0, 4, 5, 7, 19, 22, 23], "apt": [0, 4, 5, 7, 22, 23], "texinfo": [0, 4, 22, 23], "byacc": [0, 4, 23], "flex": [0, 4, 5, 22, 23], "essenti": [0, 4, 5, 22, 23], "git": [0, 3, 5, 6, 7, 11, 16, 18, 19, 22, 23], "firstli": [0, 22, 23], "would": 0, "better": [0, 5], "set": [0, 5, 11, 12, 18, 19], "share": 0, "directori": [0, 5, 11, 18, 19, 22, 23], "bashrc": [0, 3, 5, 7], "export": [0, 4, 7, 11, 18, 19, 22], "br2_dl_dir": [0, 4], "home": [0, 11, 17, 18, 19, 23], "workspac": [0, 11, 17, 19], "o": [0, 9, 12, 17, 18, 19, 21], "buildroot_dl": [0, 4], "clone": [0, 4, 5, 7, 11, 18, 19, 22, 23], "synopsi": [0, 4, 5, 7, 11, 15, 17, 18, 19, 22, 23], "repositori": [0, 4, 18, 22, 23], "github": [0, 5, 7, 11, 17, 18, 19, 22, 23], "foss": [0, 7, 11, 17, 18, 19, 22, 23], "dwc": [0, 7, 11, 17, 18, 19, 22, 23], "processor": [0, 7, 11, 17, 18, 19, 22, 23], "upstream": [0, 18, 19], "net": [0, 5, 18, 19], "tar": [0, 5, 18], "gz": [0, 5], "archiv": 0, "wget": [0, 4, 23], "2022": [0, 17, 18, 19], "08": 0, "xf": 0, "mv": 0, "mkdir": [0, 4, 7, 18, 19, 22], "cd": [0, 4, 5, 7, 11, 18, 19, 22, 23], "thi": [0, 4, 5, 9, 10, 12, 13, 15, 17, 18, 19, 21], "make": [0, 4, 5, 7, 9, 17, 18, 19, 22, 23], "c": [0, 4, 5, 9, 10, 12, 13, 15, 17, 18, 19, 21], "readlink": [0, 19], "e": [0, 4, 17, 19], "defconfig": [0, 18, 19], "path": [0, 4, 7, 9, 18, 19, 22], "your": [0, 5, 7, 9, 15, 18, 22, 23], "snps_archs38_haps_defconfig": 0, "toolchain": [0, 4, 6, 11, 17, 18, 19, 23], "br2_arcl": [0, 18, 19], "y": [0, 18, 19, 22, 23], "br2_archs38": [0, 18, 19], "br2_gcc_version_12_x": [0, 19], "br2_toolchain_uses_glibc": [0, 19], "br2_install_libstdcpp": [0, 19], "br2_enable_local": [0, 19], "br2_use_wchar": [0, 19], "br2_linux_kernel": [0, 19], "br2_linux_kernel_defconfig": [0, 19], "haps_h": [0, 18, 19], "br2_linux_kernel_custom_vers": [0, 19], "br2_linux_kernel_custom_version_valu": [0, 19], "5": [0, 17, 19, 21, 22], "16": [0, 17, 19, 22], "br2_linux_kernel_vmlinux": [0, 19], "br2_target_rootfs_initramf": [0, 19], "prebuilt": [0, 5], "09": [0, 17, 19], "br2_toolchain_extern": [0, 18, 19], "br2_toolchain_external_custom": [0, 18, 19], "br2_toolchain_external_custom_glibc": [0, 18, 19], "br2_toolchain_external_download": 0, "br2_toolchain_external_url": 0, "releas": [0, 5, 19], "arc_gnu_2022": 0, "09_prebuilt_glibc_le_archs_linux_instal": 0, "br2_toolchain_external_local": [0, 19], "br2_toolchain_external_has_ssp": [0, 19], "br2_toolchain_external_cxx": [0, 18, 19], "br2_toolchain_external_headers_5_16": [0, 18, 19], "br2_toolchain_external_gdb_server_copi": [0, 18, 19], "contain": [0, 4, 5, 13, 18], "snps_arc32_defconfig": 0, "snps_arc64_defconfig": 0, "snps_arc700_axs101_defconfig": 0, "snps_archs38_axs103_defconfig": 0, "snps_archs38_hsdk_defconfig": 0, "from": [0, 4, 5, 6, 9, 10, 16, 17, 18, 24], "i": [0, 5, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 21], "br2_toolchain_external_path": [0, 18, 19], "arch": [0, 5, 9, 12, 17, 18, 19, 21, 22, 23], "snp": [0, 5, 19, 22, 23], "gnu": [0, 4, 6, 11, 18, 19, 23], "br2_toolchain_external_custom_prefix": [0, 18, 19], "an": [0, 9, 15, 17, 18, 22], "overlai": [0, 18, 19], "br2_rootfs_overlai": [0, 18, 19], "br2_linux_kernel_config_fragment_fil": [0, 19], "fragment": [0, 18, 19], "custom": [0, 3, 18], "br2_linux_kernel_custom_git": 0, "br2_linux_kernel_custom_repo_url": 0, "br2_linux_kernel_custom_repo_vers": 0, "arc64": [0, 4, 7, 9, 21, 22, 23], "build": [2, 3, 6, 8, 11, 19, 24], "linux": [2, 3, 5, 6, 7, 8, 20, 23], "imag": [2, 6, 9, 18, 19], "configur": [2, 3, 6, 7, 18, 22, 23], "bootstrap": [3, 18, 23], "fedora": [3, 8], "37": 3, "profil": [3, 5, 7, 18], "setup": 3, "rust": 3, "elfutil": 3, "pahol": 3, "wsl": [3, 4, 6], "vpnkit": [3, 4], "dn": 3, "resolv": 3, "vpn": [3, 4], "shrink": [3, 17], "virtual": 3, "disk": 3, "": [3, 4, 9, 10, 12, 17, 18, 19, 22, 23], "space": 3, "kernel": [3, 4, 6, 8, 12, 20], "virtualbox": 4, "guest": 4, "addit": 4, "add": [4, 5, 7, 9, 17, 18, 19], "multivers": 4, "updat": 4, "util": [4, 19, 23], "x11": 4, "common": [4, 22], "vim": 4, "mc": 4, "nmap": 4, "mercuri": 4, "subvers": 4, "cmake": [4, 18], "autoconf": [4, 22, 23], "tmux": 4, "screen": 4, "minicom": 4, "htop": 4, "curl": [4, 7, 22], "rsync": [4, 18, 23], "python3": [4, 7, 23], "pip": 4, "venv": 4, "ipython3": 4, "us": [4, 5, 6, 10, 12, 15, 16, 17, 18, 19, 21, 22, 23], "crosstool": [4, 6, 24], "ng": [4, 6, 7, 24], "our": 4, "script": [4, 11, 12, 18, 19], "help2man": [4, 23], "libtool": [4, 22, 23], "bin": [4, 7, 11, 18, 19, 22, 23], "libncurses5": [4, 7, 23], "dev": [4, 5, 7, 18, 19, 22, 23], "zlib1g": [4, 7, 22, 23], "libexpat1": [4, 22, 23], "texliv": [4, 23], "gawk": [4, 22, 23], "bison": [4, 5, 22, 23], "xz": [4, 23], "local": [4, 5, 23], "main": [4, 9, 12, 14, 19, 21], "group": [4, 19], "dnf": [4, 7, 19], "groupinstal": 4, "develop": [4, 8, 22], "tool": [4, 5, 7, 10, 11, 18, 19, 22, 23], "librari": [4, 9, 18], "all": [4, 9, 17, 18], "necessari": [4, 5, 18, 19, 23], "work": [4, 6, 15, 20], "depend": [4, 13, 17], "brlapi": [4, 7], "devel": [4, 7, 18], "bzip2": [4, 7], "capston": [4, 7], "cyru": [4, 7], "sasl": [4, 7], "diffutil": 4, "dwarv": [4, 5], "expat": 4, "file": [4, 5, 6, 9, 11, 12, 13, 18, 19, 20, 21, 22], "gcc": [4, 6, 8, 12, 16, 17, 18, 21, 22], "gperf": [4, 22], "gtk3": [4, 7], "libaio": [4, 7], "libattr": [4, 7], "libcap": [4, 7], "libfdt": [4, 7], "libgcrypt": [4, 7], "libibverb": [4, 7], "libiscsi": [4, 7], "libjpeg": [4, 7], "libpng": [4, 7], "librdmacm": [4, 7], "libseccomp": [4, 7], "libssh": [4, 7], "libusbx": [4, 7], "libuuid": [4, 7], "lzo": [4, 7], "ncurs": [4, 7], "nettl": [4, 7], "ninja": [4, 7], "patch": [4, 18], "perl": 4, "thread": 4, "queue": 4, "pixman": [4, 7], "pulseaudio": [4, 7], "lib": [4, 5, 7, 18], "sdl2": [4, 7], "snappi": [4, 7], "systemtap": [4, 7], "sdt": [4, 7], "unzip": 4, "vte291": [4, 7], "which": [4, 9, 18], "zlib": [4, 7], "libmicrohttpd": 4, "libsq3": 4, "libarch": 4, "gettext": 4, "libmpc": [4, 22], "mpfr": 4, "clang": [4, 18], "llvm": [4, 18], "static": [4, 10, 18], "note": [4, 5], "bash_profil": 4, "default": [4, 5, 9], "user": [4, 5, 7, 18, 19], "instead": [4, 9], "enabl": [4, 7, 12, 18, 19, 22, 23], "network": [4, 5, 18], "through": [4, 9], "ex": [4, 5, 14, 18, 22], "d": [4, 5, 18, 21], "servic": [4, 5, 19], "start": [4, 5, 14, 15, 18, 19], "place": [4, 23], "base": 4, "repo": 4, "arc": [4, 6, 7, 9, 11, 12, 14, 17, 19, 20, 21, 23, 24], "elf32": [4, 9, 11, 12, 14, 17, 18, 21, 22, 23], "elf": [4, 9, 12, 13, 14, 21, 22], "arc32": [4, 9, 22], "uclibc": [4, 22], "i686": 4, "w64": 4, "mingw32": 4, "x86_64": 4, "qemu": [4, 6, 9, 11, 12, 18, 19, 20, 22], "qemu_hom": [4, 7], "buildroot": [4, 6, 9, 18, 19], "ld_library_path": [4, 18, 22], "function": [4, 9, 18], "clean_path": 4, "echo": 4, "sed": 4, "mnt": [4, 5], "clean_ld": 4, "unset": [4, 22], "its": 4, "name": [4, 9, 17, 18, 19, 22], "sai": 4, "remov": [4, 17], "desir": 4, "substr": 4, "shamelessli": 4, "stolen": 4, "unix": [4, 5, 9], "stackexchang": [4, 5], "291611": 4, "path_remov": 4, "delet": 4, "part": [4, 18], "so": [4, 5, 17, 18], "we": [4, 10, 17, 18], "never": 4, "accident": 4, "sub": 4, "1": [4, 5, 7, 11, 17, 18, 19, 22], "ani": [4, 18], "instanc": 4, "middl": 4, "begin": 4, "end": [4, 12], "f": [4, 18, 19, 21], "config": [4, 5, 11, 18], "global": [4, 11, 18, 19], "yurii": [4, 19], "kolerov": [4, 19], "email": [4, 7], "ykolerov": [4, 5, 11, 17, 18, 19], "proto": 4, "tlsv1": 4, "2": [4, 5, 7, 11, 15, 19, 22], "ssf": 4, "sh": [4, 11, 18, 19, 22], "rustup": 4, "r": [4, 12, 18, 19], "sourcewar": [4, 18], "autoreconf": [4, 18], "fi": [4, 18], "p": [4, 5, 7, 13, 18, 19], "cp": [4, 5, 18], "prefix": [4, 7, 18, 22], "maintain": [4, 18], "mode": [4, 9, 18, 19], "here": [4, 5, 15, 17, 18, 22, 23], "23": [4, 15, 18], "version": [4, 5, 15, 18, 22, 23], "becaus": [4, 9, 17, 18, 23], "commit": [4, 15, 18], "latest": [4, 5, 18], "pub": [4, 18, 19], "scm": [4, 15, 18], "id": [4, 9, 18, 19], "9712d9ec929fb6b3595d2970bbbac8b0b1c10ead": [4, 18], "It": [4, 9, 10, 18, 22, 23], "lead": [4, 17, 18], "gener": [4, 6, 8, 9, 13, 17, 19], "btf": [4, 18], "inform": [4, 13, 17, 18], "64": [4, 13, 18, 23], "bit": [4, 18, 23], "enumer": [4, 18], "howev": [4, 18], "below": [4, 18], "6": [4, 15, 18, 21], "0": [4, 5, 7, 9, 11, 12, 13, 17, 18, 19, 21], "don": [4, 17, 18], "t": [4, 17, 18, 19], "support": [4, 9, 18], "structur": [4, 18], "crash": [4, 18, 21], "while": [4, 9, 14, 18], "b": [4, 12, 15, 18, 21], "v1": [4, 18], "d__lib": [4, 18], "dcmake_install_prefix": [4, 18], "For": [5, 22], "restrict": 5, "consumpt": 5, "memori": [5, 17], "creat": [5, 9, 11, 12, 13, 16, 18, 19], "wslconfig": 5, "wsl2": 5, "8gb": 5, "avoid": 5, "problem": 5, "relat": 5, "corpor": 5, "mai": 5, "found": [5, 10], "sakai135": 5, "import": 5, "distro": 5, "run": [5, 6, 8, 10, 11, 14, 19], "show": [5, 14, 16, 18], "short": 5, "intro": 5, "exit": 5, "env": [5, 11], "userprofil": 5, "when": [5, 17], "you": [5, 7, 9, 10, 15, 17, 18, 19, 21, 22, 23], "open": 5, "termin": 5, "app": 5, "etc": [5, 12, 18, 19, 22], "conf": 5, "generateresolvconf": 5, "fals": 5, "reboot": [5, 9, 12, 18], "nameserv": 5, "10": [5, 14, 19], "228": 5, "search": [5, 6], "intern": 5, "instruct": [5, 9, 14], "stephenreescart": 5, "how": 5, "exampl": [5, 9, 15, 17, 18, 21, 22], "diskpart": 5, "microsoft": 5, "19041": 5, "964": 5, "copyright": 5, "On": [5, 17, 18], "comput": 5, "rdn8fhbscc": 5, "select": 5, "vdisk": 5, "appdata": 5, "canonicalgrouplimit": 5, "ubuntu20": 5, "04onwindows_79rhkp1fndgsc": 5, "localst": 5, "ext4": 5, "vhdx": 5, "successfulli": 5, "compact": [5, 17], "100": [5, 19], "percent": 5, "complet": 5, "sometim": 5, "laptop": 5, "befor": 5, "do": 5, "those": 5, "step": 5, "sure": 5, "In": 5, "libssl": 5, "libelf": [5, 18], "bc": [5, 22], "j": [5, 7, 18, 22], "expr": 5, "nproc": [5, 7, 18, 22], "x86": [5, 13, 18], "boot": 5, "bzimag": 5, "powershel": 5, "shutdown": 5, "detail": [5, 9, 15, 18], "mei": 5, "question": [5, 17], "594470": 5, "doe": [5, 6, 9, 20, 21], "have": [5, 9, 10], "modul": [5, 6], "verif": 6, "compar": [6, 8, 16], "state": [6, 8], "random": [6, 8], "program": [6, 8, 9, 18], "dejagnu": [6, 8], "test": [6, 8, 9, 10, 12, 15, 19], "binari": [6, 8, 13], "snippet": 6, "gdb": [6, 8, 16, 17, 18, 21, 22], "environ": [6, 11, 18, 23], "task": [6, 18], "ebpf": [6, 20], "glibc": [6, 20, 22, 23], "testsuit": [6, 11, 20], "fail": [6, 20], "vanilla": [6, 20], "some": [6, 13, 18, 20], "stack": [6, 20], "oper": [6, 9, 20], "ar": [6, 9, 15, 17, 18, 20], "present": [6, 20], "direct": [6, 20], "intend": [6, 20], "index": [6, 18], "page": [6, 10], "find": [7, 10, 15, 17, 19, 21, 22, 23], "good": [7, 15, 17], "tutori": 7, "wiki": 7, "project": [7, 15], "host": [7, 18, 19, 23], "libglib2": 7, "libpixman": 7, "libbluetooth": 7, "libcapston": 7, "libbrlapi": 7, "libbz2": 7, "libcurl4": 7, "gnutl": 7, "libgtk": 7, "3": [7, 22], "libjpeg8": 7, "libnuma": 7, "librbd": 7, "libsasl2": 7, "libsdl2": 7, "libsnappi": 7, "libvd": 7, "libvdeplug": 7, "libvt": 7, "91": 7, "libxen": 7, "liblzo2": 7, "valgrind": 7, "xfslib": 7, "glib2": 7, "retriev": [7, 18, 23], "sourc": [7, 17, 18, 22], "code": [7, 9, 10, 16, 18, 21], "target": [7, 8, 12, 14, 16, 18, 19, 22], "list": 7, "softmmu": 7, "debug": [7, 18], "tcg": 7, "variabl": 7, "bare": [8, 23], "metal": [8, 23], "metawar": 8, "toolkit": 8, "server": [8, 18, 19], "consid": [9, 17, 21], "simpl": 9, "save": [9, 18], "includ": [9, 12, 18, 21, 22], "stdio": [9, 12, 21], "h": [9, 10, 12, 18, 21, 22, 23], "int": [9, 12, 21], "printf": [9, 12, 21], "hello": [9, 12, 17], "n": [9, 12, 17, 18, 19], "return": [9, 12, 21], "ha": [9, 10, 13, 17, 18], "sim": [9, 11, 12], "board": [9, 19], "purpos": 9, "If": [9, 17, 18], "semihost": 9, "option": [9, 10, 16, 18], "pass": 9, "charact": 9, "devic": [9, 18, 19], "hard": 9, "0x90000000": 9, "address": 9, "A": 9, "built": [9, 17], "spec": [9, 12], "write": 9, "hs4x": [9, 21, 23], "mcpu": [9, 12, 17, 18, 21], "system": [9, 12, 18, 19, 21], "m": [9, 12, 18, 19], "cpu": [9, 12, 18, 19, 22], "1g": [9, 12], "monitor": [9, 12], "none": [9, 12, 19, 22], "displai": [9, 12, 14, 19], "nograph": [9, 12, 18, 19], "serial": [9, 12], "hs5x": [9, 21], "hs6x": [9, 22, 23], "same": [9, 17, 18], "input": 9, "output": [9, 18], "interfac": 9, "nsim": [9, 12], "nsim_emt": [9, 12], "standard": [9, 10], "runtim": 9, "ouput": 9, "both": [9, 18, 21], "But": [9, 17], "possibl": 9, "implement": [9, 13], "own": [9, 18], "hostlink": 9, "meet": [9, 17], "requir": 9, "actual": [9, 17], "just": [9, 17, 18], "one": 9, "_write": 9, "handl": [9, 18], "const": 9, "char": 9, "buf": 9, "unsign": 9, "count": [9, 18], "slightli": 9, "modifi": 9, "libqemu": 9, "newlib": [9, 17, 22], "compil": [9, 10, 13, 17, 18, 21], "along": 9, "ccac": [9, 21], "av2h": [9, 21], "hhostlib": 9, "av3h": [9, 21], "them": 9, "arcv3": [9, 22], "right": 9, "now": [9, 19], "happen": [9, 17], "absent": 9, "see": [9, 15, 17, 18], "issu": [9, 17, 19, 23], "read": 9, "document": 9, "port": [9, 12, 18], "1234": [9, 12, 14], "listet": 9, "socket": 9, "chardev": 9, "tmp": [9, 11, 18], "wait": 9, "off": [9, 12], "gdb0": 9, "virt": [9, 18, 19], "machin": 9, "vmlinux": [9, 18, 19], "also": [9, 17, 21], "loader": 9, "must": 9, "hx6x": 9, "csmith": 10, "emb": 10, "utah": 10, "edu": 10, "dynam": [10, 18], "conform": 10, "c99": 10, "stress": 10, "analyz": 10, "other": [10, 17], "process": [10, 17], "bug": [10, 23], "everi": [10, 14, 17], "report": 10, "more": [10, 17], "than": 10, "400": [10, 18], "previous": 10, "unknown": [10, 11], "argc": 10, "div": 10, "float": 10, "To": 10, "anoth": [10, 18, 23], "hh": 10, "prepar": [11, 19, 23], "site": 11, "exp": 11, "separ": 11, "srcdir": 11, "compsrc": 11, "objdir": 11, "tmpdir": 11, "target_alia": 11, "target_triplet": 11, "arc_board_dir": 11, "qemu_serial_io": 11, "info": 11, "exist": [11, 17], "boards_dir": 11, "lappend": 11, "baseboard": 11, "verbos": [11, 12], "target_list": 11, "bash": [11, 22], "runtest": 11, "content": [12, 17, 19], "world": 12, "g": [12, 17, 18, 19, 21], "o0": [12, 17, 19, 22], "nsimdrv": 12, "tcf": 12, "nsim_hom": 12, "templat": 12, "hs48_full": 12, "width": 12, "height": 12, "defin": [12, 17], "hook": 12, "quit": 12, "confirm": 12, "remot": [12, 14, 16], "load": [12, 14, 18], "continu": 12, "log": [12, 15, 18, 22], "overwrit": [12, 17], "regist": 12, "txt": [12, 18, 19], "batch": 12, "caus": 13, "line": [13, 17, 19], "wa": [13, 15], "invok": 13, "record": 13, "object": [13, 18], "being": 13, "onli": 13, "exact": 13, "format": [13, 17, 18, 21], "usual": 13, "take": 13, "form": 13, "section": 13, "ascii": 13, "text": [13, 17], "afterward": 13, "execut": 13, "o2": [13, 18], "readelf": 13, "out": [13, 17, 22], "string": [13, 17], "dump": 13, "4": [13, 18, 21], "mtune": 13, "13": [13, 15, 22], "march": 13, "21": [13, 18], "25": 13, "q": [13, 18], "help": [13, 17], "disassembli": 14, "next": 14, "time": 14, "stop": 14, "pc": 14, "x": [14, 18, 23], "10i": 14, "onelin": 15, "graph": 15, "decor": 15, "abbrev": 15, "v5": [15, 19], "18": 15, "shahab": [15, 18], "bpf": 15, "jit": [15, 18], "switch": [15, 16], "ad": 15, "origin": 15, "prior": 15, "checkout": [15, 22], "As": 15, "suppos": 15, "try": 15, "broke": 15, "featur": 15, "known": [15, 23], "v2": 15, "rc2": 15, "session": 15, "bad": [15, 17], "current": 15, "frecord": 16, "statu": 16, "branch": [16, 18], "bisect": 16, "initi": [17, 19], "describ": [17, 19], "344": 17, "turn": 17, "differ": 17, "seem": 17, "like": 17, "consequ": 17, "leakag": 17, "somewher": 17, "assembl": [17, 18], "this_name_must_be_in_debug": 17, "nop": 17, "11": 17, "objdump": [17, 18, 21], "wi": 17, "grep": 17, "dw_at_nam": 17, "indirect": 17, "offset": 17, "0x0": 17, "macro": 17, "unlik": 17, "poor": 17, "put": 17, "preprocess": 17, "expand": 17, "after": [17, 23], "gdwarf": 17, "get": [17, 18, 19, 22, 23], "task_arc64_dwarf": 17, "extra": 17, "gap": 17, "too": [17, 21], "big": 17, "him": 17, "know": 17, "skip": 17, "debug_lin": 17, "Then": [17, 21], "alwai": 17, "filenam": 17, "symbol": 17, "number": 17, "comment": [17, 19], "think": 17, "binutil": [17, 22], "blob": 17, "ga": 17, "dwarf2dbg": 17, "l2812": 17, "overwritten": 17, "even": 17, "sens": 17, "mayb": 17, "stage": 17, "platform": 17, "intel": 17, "side": 17, "arm": 17, "why": 17, "properli": 17, "whet": 17, "valid": 17, "cannot": [17, 21], "thu": 17, "easiest": 17, "wai": 17, "prevent": [17, 18], "thei": 17, "useless": 17, "context": 17, "undefin": 17, "behavior": 17, "need": [17, 18], "189": 18, "ssh": [18, 19], "keygen": [18, 19], "rsa": [18, 19], "public": [18, 19], "privat": 18, "pair": 18, "enter": 18, "id_rsa": [18, 19], "passphras": 18, "empti": 18, "again": 18, "identif": 18, "been": 18, "hostnam": 18, "127": 18, "root": 18, "identityfil": 18, "busybox": 18, "config_feature_pidfil": 18, "config_pid_file_path": 18, "var": 18, "config_debug": 18, "config_debug_pessim": 18, "config_ftpd": 18, "config_feature_ftpd_writ": 18, "config_feature_ftpd_accept_broken_list": 18, "config_feature_ftpd_authent": 18, "config_nc": 18, "config_netcat": 18, "config_nc_serv": 18, "config_nc_extra": 18, "config_nc_110_compat": 18, "config_telnetd": 18, "config_feature_telnetd_standalon": 18, "config_feature_telnetd_port_default": 18, "config_feature_telnetd_inetd_wait": 18, "device_t": 18, "tabl": [18, 19], "makedev": 18, "readm": 18, "assign": [18, 22], "proper": 18, "ownership": 18, "permiss": 18, "variou": 18, "doesn": 18, "where": 18, "devtmpf": 18, "mdev": 18, "udev": 18, "type": 18, "uid": [18, 19], "gid": [18, 19], "major": 18, "minor": 18, "inc": 18, "755": 18, "1777": 18, "700": 18, "www": 18, "33": 18, "shadow": 18, "600": 18, "passwd": 18, "644": 18, "up": [18, 19], "pre": 18, "down": 18, "post": 18, "chang": 18, "dropbear": 18, "dropbear_rsa_host_kei": 18, "dropbear_ed25519_host_kei": 18, "usr": 18, "uncom": 18, "allow": 18, "non": 18, "x11r6": 18, "xfbdev": 18, "4755": 18, "copi": [18, 19], "ebpf_jit": 18, "authorized_kei": 18, "ebpf_defconfig": 18, "br2_toolchain_external_inet_rpc": [18, 19], "br2_enable_debug": 18, "br2_debug_3": 18, "br2_optimize_g": 18, "br2_target_generic_hostnam": 18, "br2_rootfs_device_t": 18, "br2_system_dhcp": [18, 19], "eth0": [18, 19], "br2_package_busybox_config_fragment_fil": 18, "br2_package_ncurs": 18, "br2_package_ncurses_wchar": 18, "br2_package_haveg": [18, 19], "br2_package_dropbear": 18, "br2_package_dropbear_disable_reversedn": 18, "br2_package_rsync": 18, "br2_target_rootfs_cpio": 18, "br2_package_host_kmod": 18, "br2_package_libbpf": 18, "br2_package_bpftool": 18, "br2_package_elfutil": 18, "pwd": 18, "br2_defconfig": 18, "makefil": 18, "diff": 18, "ae90af5b0425": 18, "4699a022079a": 18, "100644": 18, "7": 18, "ifneq": 18, "config_bpf_jit_always_on": 18, "___bpf_prog_run": 18, "gcse": 18, "disabl": [18, 22], "3193c0836f203": 18, "cflag": [18, 22], "nogcs": 18, "config_x86": 18, "config_cc_is_gcc": 18, "fno": 18, "endif": 18, "cflags_cor": 18, "call": 18, "cc": 18, "warn": 18, "overrid": 18, "init": 18, "yy": 18, "og": 18, "g3": [18, 22], "finlin": 18, "onc": 18, "ebpf_jit_defconfig": 18, "config_swap": 18, "config_perf_ev": 18, "config_bpf_ev": 18, "config_sysvipc": 18, "config_posix_mqueu": 18, "config_cross_memory_attach": 18, "config_no_hz_idl": 18, "config_high_res_tim": 18, "config_bpf_syscal": 18, "config_bpf_jit": 18, "config_bpf_unpriv_default_off": 18, "config_preempt": 18, "config_ikconfig": 18, "config_ikconfig_proc": 18, "config_namespac": [18, 19], "config_uts_n": [18, 19], "config_pid_n": [18, 19], "config_initramfs_sourc": 18, "config_arc_builtin_dtb_nam": 18, "config_expert": 18, "config_sgetmask_syscal": 18, "config_debug_perf_use_vmalloc": 18, "config_compat_brk": 18, "config_slab": 18, "config_kprob": 18, "config_compat_32bit_tim": 18, "config_modul": 18, "config_compact": 18, "config_net": 18, "config_packet": 18, "config_packet_diag": 18, "config_unix": 18, "config_unix_diag": 18, "config_net_kei": 18, "config_inet": 18, "config_ipv6": [18, 19], "config_wireless": 18, "config_devtmpf": 18, "config_devtmpfs_mount": 18, "config_standalon": 18, "config_prevent_firmware_build": 18, "config_firmware_memmap": 18, "config_of": 18, "config_virtio_blk": 18, "config_netdevic": 18, "config_virtio_net": 18, "config_ethernet": 18, "config_wlan": 18, "config_input_evdev": 18, "config_input_keyboard": 18, "config_input_mous": 18, "config_serio": 18, "config_legacy_pti": 18, "config_serial_8250": 18, "config_serial_8250_16550a_vari": 18, "config_serial_8250_consol": 18, "config_serial_8250_nr_uart": 18, "config_serial_8250_runtime_uart": 18, "config_serial_8250_dw": 18, "config_serial_of_platform": 18, "config_hw_random": 18, "config_hwmon": 18, "config_hid": 18, "config_usb_support": 18, "config_virtio_mmio": 18, "config_common_clk": 18, "config_iommu_support": 18, "config_ext2_f": 18, "config_ext2_fs_xattr": 18, "config_tmpf": 18, "config_misc_filesystem": 18, "config_nfs_f": [18, 19], "config_debug_info": 18, "config_debug_info_dwarf_toolchain_default": 18, "config_debug_info_btf": 18, "config_gdb_script": 18, "config_frame_warn": 18, "1024": 18, "config_debug_f": 18, "config_debug_memory_init": 18, "config_debug_preempt": 18, "config_boottime_trac": 18, "config_irqsoff_trac": 18, "config_preempt_trac": 18, "config_sched_trac": 18, "config_hwlat_trac": 18, "config_ftrace_syscal": 18, "config_test_bpf": 18, "cross_compil": [18, 22], "menuconfig": [18, 23], "die": 18, "entri": 18, "libgcc": 18, "At": 18, "moment": 18, "yet": 18, "want": 18, "appli": 18, "b17d1955b67493afe37430694c8982411336fc4c": 18, "flag": 18, "0d99ef17e4a5": 18, "23af14c6ef94": 18, "100755": 18, "14": 18, "pahole_v": 18, "ge": 18, "118": 18, "le": 18, "121": 18, "extra_paholeopt": 18, "skip_encoding_btf_var": 18, "btf_gen_float": 18, "122": 18, "lnximg": 18, "insdir": 18, "qinsdir": 18, "qport": 18, "2000": 18, "nport": 18, "2001": 18, "ftp": 18, "hostfwd": 18, "tcp": 18, "2021": 18, "tln": 18, "2023": 18, "nc": 18, "qflag": 18, "freq_hz": [18, 19], "50000000": [18, 19], "netdev": [18, 19], "net0": [18, 19], "virtio": [18, 19], "phoni": 18, "clean": [18, 22], "tui": 18, "auto": 18, "safe": 18, "dir": 18, "remotetimeout": 18, "3000": 18, "rem": 18, "bpf_int_jit_compil": 18, "cont": 18, "cgdb": 18, "rm": [18, 22], "sym": 18, "gdbinit": 18, "adn": 18, "mount": [18, 19], "debugf": 18, "sy": 18, "sysctl": 18, "core": 18, "bpf_jit_en": 18, "test_bpf": 18, "ko": 18, "insmod": 18, "AS": 18, "ld": 18, "di": 18, "visual": 18, "jump": 18, "color": 18, "disassembl": 18, "hs38_linux": 18, "fetch": 18, "messag": 18, "trace": 18, "raw": 18, "jite": 18, "byte": 18, "header": [18, 22], "bpftool": 18, "libbpf": 18, "src": [18, 22], "libzlib": 18, "libz": 18, "uapi": 18, "go": [18, 19], "minim": 18, "d_target_arch_arc": 18, "idiraft": 18, "sysroot": 18, "inspect": 18, "insn": 18, "skeleton": 18, "gen": 18, "skel": 18, "final": 18, "wall": 18, "l": [18, 22], "lbpf": 18, "lelf": 18, "lz": 18, "147": 19, "anonuid": 19, "anongid": 19, "u": 19, "respect": 19, "rw": 19, "all_squash": 19, "1000": 19, "no_subtree_check": 19, "insecur": 19, "rule": 19, "firewal": 19, "systemctl": 19, "rpcbind": 19, "sshd": 19, "cmd": 19, "perman": 19, "nfs3": 19, "mountd": 19, "rpc": 19, "bind": 19, "reload": 19, "exportf": 19, "ip": 19, "tuntap": 19, "tap1": 19, "addr": 19, "42": 19, "24": 19, "link": 19, "buildroot_build": 19, "glibc_test_defconfig": 19, "br2_toolchain_external_wchar": 19, "br2_toolchain_buildroot_cxx": 19, "br2_target_optim": 19, "br2_toolchain_glibc_gconv_libs_copi": 19, "br2_rootfs_users_t": 19, "br2_package_host_linux_headers_custom_5_16": 19, "br2_package_openssh": 19, "br2_package_ntp": 19, "br2_package_ntp_ntpd": 19, "br2_package_nfs_util": 19, "br2_package_sshf": 19, "br2_package_mak": 19, "br2_package_override_fil": 19, "buildroot_overrid": 19, "config_ipc_n": 19, "config_user_n": 19, "config_net_n": 19, "config_cgroup": 19, "config_memcg": 19, "linux_override_srcdir": 19, "task_glibc_mmu_bug": 19, "glibc_override_srcdir": 19, "tag": 19, "36": 19, "cat": 19, "corp": 19, "usernam": 19, "password": 19, "shell": 19, "dirclean": 19, "ifnam": 19, "downscript": 19, "ifconfig": 19, "ping": 19, "addus": 19, "kei": 19, "full": 19, "realpath": [19, 22], "66": 19, "ga1dc0be03c9dd850b864bd7a9c03cf8e396eb7ca": 19, "__full_path_to_glibc_source__": 19, "nfg": 19, "nolock": 19, "sshf": 19, "idmap": 19, "allow_oth": 19, "wrapper": 19, "cross": [19, 23], "check": 19, "4x": [21, 22], "5x": 21, "mwdt": 21, "recogn": 21, "littlearc64": 21, "00000004": 21, "c0f1": 21, "shor": 21, "0xc0f1": 21, "740c": 21, "mov_": 21, "r0": 21, "8": 21, "752c": 21, "r1": 21, "exactli": 21, "push_": 21, "blink": 21, "opcod": 21, "automak": 22, "autotool": 22, "libmpfr": 22, "libgmp": 22, "libncurs": 22, "patchutil": 22, "obtain": 22, "cg": 22, "arcv2": [22, 23], "multilib": [22, 23], "werror": 22, "fvar": 22, "track": 22, "cxxflag": 22, "torvald": 22, "headers_instal": 22, "config_isa_arcv2": 22, "install_hdr_path": 22, "config_isa_arcv3": 22, "my": 22, "tree": 22, "builder_path": 22, "headers_path": 22, "out_dir": 22, "log_fil": 22, "rf": 22, "touch": 22, "configure_linux": 22, "fpu": 22, "configure_baremet": 22, "v": 22, "tee": 22, "build_and_instal": 22, "product": 23, "ct": 23, "move": 23, "well": 23, "1809": 23, "most": 23, "interest": 23, "wide": 23, "rang": 23, "arcompact": 23, "arc600": 23, "arc700": 23, "aec": 23, "em": 23, "hs3x": 23}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"build": [0, 4, 5, 7, 9, 18, 22, 23], "linux": [0, 4, 9, 18, 19, 22], "imag": 0, "tabl": [0, 4, 6, 8], "content": [0, 4, 8], "us": [0, 8, 9, 13], "resourc": 0, "obtain": 0, "buildroot": [0, 1, 2], "configur": [0, 1, 4, 5, 19], "arc": [0, 18, 22], "h": 0, "3x": 0, "4x": 0, "glibc": [0, 19], "5x": 0, "uclibc": 0, "6x": 0, "predefin": 0, "addit": 0, "option": [0, 13], "environ": [3, 22], "bootstrap": 4, "ubuntu": [4, 5, 7, 19], "22": [4, 19], "04": [4, 19], "fedora": [4, 7, 19], "37": [4, 19], "profil": 4, "bashrc": 4, "setup": [4, 18], "git": [4, 15], "instal": [4, 5, 7, 18], "rust": 4, "elfutil": [4, 18], "pahol": [4, 18], "wsl": 5, "vpnkit": 5, "dn": 5, "resolv": 5, "vpn": 5, "shrink": 5, "virtual": 5, "disk": 5, "": [5, 6], "space": 5, "custom": 5, "kernel": [5, 9, 18, 19], "yurii": 6, "kolerov": 6, "document": 6, "indic": 6, "qemu": [7, 8, 21], "packag": 7, "verif": [8, 10, 12], "run": [9, 12, 18], "binari": 9, "bare": 9, "metal": 9, "target": [9, 13], "gcc": [9, 13], "metawar": 9, "develop": 9, "toolkit": 9, "gdb": [9, 12, 14], "server": [9, 12], "gener": [10, 18], "random": 10, "program": 10, "dejagnu": 11, "test": [11, 18], "compar": [12, 15], "state": 12, "compil": 12, "an": 12, "exampl": 12, "client": 12, "frecord": 13, "switch": 13, "show": 13, "statu": 13, "branch": 15, "creat": 15, "from": [15, 22, 23], "remot": 15, "bisect": 15, "code": 15, "snippet": 16, "file": 17, "direct": 17, "doe": 17, "work": 17, "intend": 17, "The": [17, 19], "problem": [17, 19], "reproduc": [17, 19], "solut": 17, "ebpf": 18, "openssh": 18, "kei": 18, "rootf": 18, "cpio": 18, "workaround": 18, "complex": 18, "float": 18, "error": 18, "boot": 18, "analyz": 18, "dump": 18, "simpl": 18, "bpf": 18, "applic": 18, "testsuit": 19, "fail": 19, "vanilla": 19, "nf": 19, "wsl2": 19, "tap": 19, "interfac": 19, "task": 20, "some": 21, "stack": 21, "oper": 21, "ar": 21, "present": 21, "gnu": [22, 24], "toolchain": [22, 24], "prepar": 22, "baremet": 22, "script": 22, "crosstool": 23, "ng": 23}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Build Linux images": [[0, "build-linux-images"]], "Table of Contents": [[0, "table-of-contents"], [4, "table-of-contents"], [8, null]], "Useful resources": [[0, "useful-resources"]], "Obtaining Buildroot": [[0, "obtaining-buildroot"]], "Build images": [[0, "build-images"]], "Configuring Buildroot": [[0, "configuring-buildroot"]], "ARC HS 3x/4x (glibc)": [[0, "arc-hs-3x-4x-glibc"]], "ARC HS 5x (uClibc)": [[0, "arc-hs-5x-uclibc"]], "ARC HS 6x (glibc)": [[0, "arc-hs-6x-glibc"]], "Predefined configurations": [[0, "predefined-configurations"]], "Additional configuration options": [[0, "additional-configuration-options"]], "Buildroot configuration": [[1, "buildroot-configuration"]], "Buildroot": [[2, "buildroot"]], "Environment": [[3, "environment"]], "Linux": [[4, "linux"]], "Bootstrap Ubuntu 22.04": [[4, "bootstrap-ubuntu-22-04"]], "Bootstrap Fedora 37": [[4, "bootstrap-fedora-37"]], "Configure .profile": [[4, "configure-profile"]], "Configure .bashrc": [[4, "configure-bashrc"]], "Setup Git": [[4, "setup-git"]], "Install Rust": [[4, "install-rust"]], "Build and install elfutils": [[4, "build-and-install-elfutils"], [18, "build-and-install-elfutils"]], "Build and install pahole": [[4, "build-and-install-pahole"]], "WSL": [[5, "wsl"]], "Install Ubuntu": [[5, "install-ubuntu"]], "Install wsl-vpnkit": [[5, "install-wsl-vpnkit"]], "Configure DNS resolving for VPN": [[5, "configure-dns-resolving-for-vpn"]], "Shrink virtual disk\u2019s space": [[5, "shrink-virtual-disk-s-space"]], "Build and install a custom kernel": [[5, "build-and-install-a-custom-kernel"]], "Yuriy Kolerov\u2019s documentation": [[6, "yuriy-kolerov-s-documentation"]], "Indices and tables": [[6, "indices-and-tables"]], "Building QEMU": [[7, "building-qemu"]], "Install packages for Ubuntu": [[7, "install-packages-for-ubuntu"]], "Install packages for Fedora": [[7, "install-packages-for-fedora"]], "Build and install QEMU": [[7, "build-and-install-qemu"]], "QEMU": [[8, "qemu"]], "Verification of QEMU": [[8, "verification-of-qemu"]], "Using QEMU": [[8, "using-qemu"]], "Building and running binaries": [[9, "building-and-running-binaries"]], "Build binaries for bare metal targets using GCC": [[9, "build-binaries-for-bare-metal-targets-using-gcc"]], "Build binaries for bare metal targets using MetaWare Development Toolkit": [[9, "build-binaries-for-bare-metal-targets-using-metaware-development-toolkit"]], "Run a GDB server": [[9, "run-a-gdb-server"], [12, "run-a-gdb-server"]], "Running the Linux kernel": [[9, "running-the-linux-kernel"]], "Verification by generating random programs": [[10, "verification-by-generating-random-programs"]], "DejaGnu tests": [[11, "dejagnu-tests"]], "Verification by comparing states": [[12, "verification-by-comparing-states"]], "Compile an example": [[12, "compile-an-example"]], "Run a GDB client": [[12, "run-a-gdb-client"]], "GCC": [[13, "gcc"]], "Using -frecord-gcc-switches": [[13, "using-frecord-gcc-switches"]], "Show status of target options": [[13, "show-status-of-target-options"]], "GDB": [[14, "gdb"]], "Git": [[15, "git"]], "Compare branches": [[15, "compare-branches"]], "Create a branch from remote": [[15, "create-a-branch-from-remote"]], "Bisect code": [[15, "bisect-code"]], "Snippets": [[16, "snippets"]], "\ud83d\udfe2 .file directive does not work as intended": [[17, "file-directive-does-not-work-as-intended"]], "The Problem": [[17, "the-problem"], [19, "the-problem"]], "Reproduce": [[17, "reproduce"], [19, "reproduce"]], "Solution": [[17, "solution"]], "\ud83d\udfe1 eBPF in Linux for ARC": [[18, "ebpf-in-linux-for-arc"]], "Build and install Pahole": [[18, "build-and-install-pahole"]], "Generate and setup OpenSSH keys": [[18, "generate-and-setup-openssh-keys"]], "Building rootfs.cpio": [[18, "building-rootfs-cpio"]], "Building a Linux kernel": [[18, "building-a-linux-kernel"]], "Workaround for complex float error": [[18, "workaround-for-complex-float-error"]], "Booting": [[18, "booting"]], "Run eBPF tests": [[18, "run-ebpf-tests"]], "Analyzing dumps": [[18, "analyzing-dumps"]], "Build a simple BPF application": [[18, "build-a-simple-bpf-application"]], "\ud83d\udfe1 glibc testsuite fails with vanilla Linux kernels": [[19, "glibc-testsuite-fails-with-vanilla-linux-kernels"]], "Configure NFS (Fedora 37)": [[19, "configure-nfs-fedora-37"]], "Configure NFS (WSL2 with Ubuntu 22.04)": [[19, "configure-nfs-wsl2-with-ubuntu-22-04"]], "Configure TAP interface": [[19, "configure-tap-interface"]], "Tasks": [[20, "tasks"]], "\ud83d\udfe1 Some stack operations are not presented in QEMU": [[21, "some-stack-operations-are-not-presented-in-qemu"]], "Building from arc-gnu-toolchain": [[22, "building-from-arc-gnu-toolchain"]], "Prepare environment": [[22, "prepare-environment"]], "Build baremetal toolchain": [[22, "build-baremetal-toolchain"]], "Build Linux toolchain": [[22, "build-linux-toolchain"]], "Scripts": [[22, "scripts"]], "Building from crosstool-ng": [[23, "building-from-crosstool-ng"]], "GNU Toolchain": [[24, "gnu-toolchain"]]}, "indexentries": {}})