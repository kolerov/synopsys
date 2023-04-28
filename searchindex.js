Search.setIndex({"docnames": ["boards/emsk", "boards/hsdk", "boards/index", "buildroot/build", "buildroot/config", "buildroot/index", "environment/index", "environment/linux", "environment/vbox", "environment/wsl", "index", "qemu/build", "qemu/index", "qemu/using", "qemu/verification/csmith", "qemu/verification/dejagnu", "qemu/verification/state", "snippets/gcc", "snippets/gdb", "snippets/git", "snippets/index", "tasks/binutils_file_bug", "tasks/glibc_mmu_bug", "tasks/index", "tasks/qemu_stack_ops", "toolchain/build-dev", "toolchain/build-prod", "toolchain/eclipse", "toolchain/index"], "filenames": ["boards/emsk.rst", "boards/hsdk.rst", "boards/index.rst", "buildroot/build.rst", "buildroot/config.rst", "buildroot/index.rst", "environment/index.rst", "environment/linux.rst", "environment/vbox.rst", "environment/wsl.rst", "index.rst", "qemu/build.rst", "qemu/index.rst", "qemu/using.rst", "qemu/verification/csmith.rst", "qemu/verification/dejagnu.rst", "qemu/verification/state.rst", "snippets/gcc.rst", "snippets/gdb.rst", "snippets/git.rst", "snippets/index.rst", "tasks/binutils_file_bug.rst", "tasks/glibc_mmu_bug.rst", "tasks/index.rst", "tasks/qemu_stack_ops.rst", "toolchain/build-dev.rst", "toolchain/build-prod.rst", "toolchain/eclipse.rst", "toolchain/index.rst"], "titles": ["EM Starter Kit", "HS Development Kit", "Development Boards", "Build Linux images", "Buildroot configuration", "Buildroot", "Environment", "Configuring Linux", "Configuring Guest Linux for VirtualBox", "Configuring WSL", "Yuriy Kolerov\u2019s documentation", "Building QEMU", "QEMU", "Building and running binaries", "Verification by generating random programs", "DejaGnu tests", "Verification by comparing states", "GCC", "GDB", "Git", "Snippets", "\ud83d\udfe2 <code class=\"docutils literal notranslate\"><span class=\"pre\">.file</span></code> directive does not work as intended", "\ud83d\udfe1 glibc testsuite fails with vanilla Linux kernels", "Tasks", "\ud83d\udfe1 Some stack operations are not presented in QEMU", "Building from <code class=\"docutils literal notranslate\"><span class=\"pre\">arc-gnu-toolchain</span></code>", "Building from <code class=\"docutils literal notranslate\"><span class=\"pre\">crosstool-ng</span></code>", "Eclipse Plugin", "GNU Toolchain"], "terms": {"em": [2, 10, 26], "starter": [2, 10], "kit": [2, 10], "h": [2, 10, 13, 14, 16, 24, 25, 26], "manual": [3, 8, 21], "http": [3, 7, 9, 11, 14, 15, 19, 21, 22, 25, 26, 27], "org": [3, 7, 11, 19, 25, 27], "download": [3, 7, 9, 25, 27], "html": [3, 27], "train": 3, "bootlin": 3, "com": [3, 7, 9, 11, 15, 19, 21, 22, 25, 26, 27], "doc": [3, 19], "slide": 3, "pdf": 3, "prerequisit": 3, "packag": [3, 7, 8, 9, 12, 27], "can": [3, 7, 8, 9, 11, 14, 21, 22, 24, 25, 26], "instal": [3, 6, 8, 12, 22, 25, 26, 27], "ubuntu": [3, 6, 12], "22": [3, 6, 9], "04": [3, 6, 9], "follow": [3, 9, 19], "command": [3, 9, 14, 16, 17, 18, 21, 27], "sudo": [3, 7, 8, 9, 11, 22, 25, 26], "apt": [3, 7, 8, 9, 11, 25, 26], "texinfo": [3, 7, 25, 26], "byacc": [3, 7, 26], "flex": [3, 7, 9, 25, 26], "essenti": [3, 7, 8, 9, 25, 26], "git": [3, 6, 9, 10, 11, 15, 20, 22, 25, 26], "firstli": [3, 25, 26, 27], "would": 3, "better": [3, 9], "set": [3, 9, 15, 16, 22], "share": [3, 25], "directori": [3, 9, 15, 22, 25, 26, 27], "bashrc": [3, 6, 11], "export": [3, 7, 11, 15, 22, 25, 27], "br2_dl_dir": [3, 7], "home": [3, 9, 15, 21, 22, 26, 27], "workspac": [3, 15, 21, 22], "o": [3, 13, 16, 21, 22, 24], "buildroot_dl": [3, 7], "clone": [3, 7, 9, 11, 15, 22, 25, 26, 27], "synopsi": [3, 7, 11, 15, 19, 21, 22, 25, 26, 27], "repositori": [3, 7, 8, 25, 26, 27], "github": [3, 7, 9, 11, 15, 21, 22, 25, 26, 27], "foss": [3, 11, 15, 21, 22, 25, 26, 27], "dwc": [3, 11, 15, 21, 22, 25, 26, 27], "processor": [3, 9, 11, 15, 21, 22, 25, 26, 27], "upstream": [3, 22], "net": [3, 9, 22], "tar": [3, 9, 25, 27], "gz": [3, 9, 27], "archiv": [3, 27], "wget": [3, 7, 25, 26], "2022": [3, 21, 22], "08": 3, "xf": 3, "mv": 3, "mkdir": [3, 7, 9, 11, 22, 25], "cd": [3, 7, 8, 9, 11, 15, 22, 25, 26], "thi": [3, 7, 9, 13, 14, 16, 17, 19, 21, 22, 24], "make": [3, 7, 8, 9, 11, 13, 21, 22, 25, 26], "c": [3, 7, 9, 13, 14, 16, 17, 19, 21, 22, 24], "readlink": [3, 22], "e": [3, 7, 21, 22], "defconfig": [3, 22], "path": [3, 7, 11, 13, 22, 25, 27], "your": [3, 7, 8, 9, 11, 13, 19, 25, 26, 27], "snps_archs38_haps_defconfig": 3, "toolchain": [3, 7, 10, 15, 21, 22, 26], "br2_arcl": [3, 22], "y": [3, 7, 8, 22, 25, 26], "br2_archs38": [3, 22], "br2_gcc_version_12_x": [3, 22], "br2_toolchain_uses_glibc": [3, 22], "br2_install_libstdcpp": [3, 22], "br2_enable_local": [3, 22], "br2_use_wchar": [3, 22], "br2_linux_kernel": [3, 22], "br2_linux_kernel_defconfig": [3, 22], "haps_h": [3, 22], "br2_linux_kernel_custom_vers": [3, 22], "br2_linux_kernel_custom_version_valu": [3, 22], "5": [3, 21, 22, 24, 25, 27], "16": [3, 21, 22, 25], "br2_linux_kernel_vmlinux": [3, 22], "br2_target_rootfs_initramf": [3, 22], "prebuilt": [3, 9], "09": [3, 21, 22], "br2_toolchain_extern": [3, 22], "br2_toolchain_external_custom": [3, 22], "br2_toolchain_external_custom_glibc": [3, 22], "br2_toolchain_external_download": 3, "br2_toolchain_external_url": 3, "releas": [3, 7, 8, 9, 22, 27], "arc_gnu_2022": 3, "09_prebuilt_glibc_le_archs_linux_instal": 3, "br2_toolchain_external_local": [3, 22], "br2_toolchain_external_has_ssp": [3, 22], "br2_toolchain_external_cxx": [3, 22], "br2_toolchain_external_headers_5_16": [3, 22], "br2_toolchain_external_gdb_server_copi": [3, 22], "contain": [3, 7, 17], "snps_arc32_defconfig": 3, "snps_arc64_defconfig": 3, "snps_arc700_axs101_defconfig": 3, "snps_archs38_axs103_defconfig": 3, "snps_archs38_hsdk_defconfig": 3, "from": [3, 7, 9, 10, 13, 14, 20, 21, 28], "i": [3, 9, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 25], "br2_toolchain_external_path": [3, 22], "arch": [3, 9, 13, 16, 21, 22, 24, 25, 26], "snp": [3, 9, 22, 26], "gnu": [3, 7, 10, 15, 22, 26], "br2_toolchain_external_custom_prefix": [3, 22], "an": [3, 7, 9, 13, 19, 21, 25, 27], "overlai": [3, 22], "br2_rootfs_overlai": [3, 22], "br2_linux_kernel_config_fragment_fil": [3, 22], "fragment": [3, 22], "custom": 3, "br2_linux_kernel_custom_git": 3, "br2_linux_kernel_custom_repo_url": 3, "br2_linux_kernel_custom_repo_vers": 3, "arc64": [3, 7, 11, 13, 24, 25, 26], "build": [5, 6, 8, 10, 12, 15, 22, 28], "linux": [5, 6, 10, 11, 12, 23, 26], "imag": [5, 9, 10, 13, 22], "configur": [5, 6, 10, 11, 25, 26], "all": [6, 13, 21], "distribut": 6, "setup": 6, "cento": 6, "7": 6, "fedora": [6, 12], "37": [6, 9], "digil": 6, "adept": 6, "2": [6, 9, 11, 15, 19, 22, 25], "profil": [6, 9, 11], "rust": 6, "elfutil": 6, "pahol": 6, "bpftool": 6, "guest": [6, 10], "virtualbox": [6, 10], "18": [6, 19], "wsl": [6, 10], "vpnkit": 6, "kernel": [6, 7, 8, 10, 12, 16, 23], "6": [6, 7, 19, 24, 25], "1": [6, 7, 11, 15, 21, 22, 25], "file": [6, 7, 10, 13, 15, 16, 17, 22, 23, 24, 25], "shrink": [6, 21], "virtual": [6, 8], "disk": 6, "": [6, 7, 13, 14, 16, 21, 22, 25, 26, 27], "space": 6, "grant": 7, "access": 7, "serial": [7, 13, 16], "devic": [7, 13, 22], "like": [7, 9, 21], "dev": [7, 9, 11, 22, 25, 26], "ttyusb0": 7, "usermod": [7, 8], "ag": [7, 8], "dialout": 7, "ykolerov": [7, 8, 9, 15, 21, 22, 27], "add": [7, 8, 9, 11, 13, 21, 22], "user": [7, 8, 9, 11, 22, 27], "wheel": 7, "group": [7, 8, 22], "enabl": [7, 8, 11, 16, 22, 25, 26], "epel": [7, 8], "updat": [7, 8], "yum": [7, 8], "latest": [7, 9], "develop": [7, 10, 12, 25, 27], "tool": [7, 9, 11, 14, 15, 22, 25, 26, 27], "them": [7, 13], "scl": 7, "devtoolset": 7, "9": [7, 27], "rh": 7, "git227": 7, "bash": [7, 9, 15, 25], "common": [7, 25], "vim": 7, "mc": 7, "nmap": 7, "mercuri": 7, "subvers": 7, "cmake": 7, "autoconf": [7, 25, 26], "tmux": 7, "screen": 7, "minicom": 7, "htop": 7, "curl": [7, 11, 25], "rsync": [7, 26], "python3": [7, 11, 26], "pip": 7, "venv": 7, "ipython3": 7, "us": [7, 9, 10, 14, 16, 19, 20, 21, 22, 24, 25, 26], "crosstool": [7, 10, 28], "ng": [7, 10, 11, 28], "our": 7, "script": [7, 15, 16, 22], "help2man": [7, 26], "libtool": [7, 25, 26], "bin": [7, 9, 11, 15, 22, 25, 26, 27], "libncurses5": [7, 11, 26], "zlib1g": [7, 11, 25, 26], "libexpat1": [7, 25, 26], "texliv": [7, 26], "gawk": [7, 25, 26], "bison": [7, 9, 25, 26], "xz": [7, 26], "util": [7, 8, 9, 22, 26], "local": [7, 9, 20, 26, 27], "main": [7, 13, 16, 18, 22, 24], "dnf": [7, 9, 11, 22], "groupinstal": 7, "librari": [7, 13], "necessari": [7, 9, 22, 26], "work": [7, 10, 19, 23], "depend": [7, 9, 17, 21, 27], "brlapi": [7, 11], "devel": [7, 8, 11], "bzip2": [7, 8, 11], "capston": [7, 11], "cyru": [7, 11], "sasl": [7, 11], "diffutil": 7, "dwarv": [7, 9], "expat": 7, "gcc": [7, 8, 10, 12, 16, 20, 21, 24, 25], "gperf": [7, 25], "gtk3": [7, 11], "libaio": [7, 11], "libattr": [7, 11], "libcap": [7, 11], "libfdt": [7, 11], "libgcrypt": [7, 11], "libibverb": [7, 11], "libiscsi": [7, 11], "libjpeg": [7, 11], "libpng": [7, 11], "librdmacm": [7, 11], "libseccomp": [7, 11], "libssh": [7, 11], "libusbx": [7, 11], "libuuid": [7, 11], "lzo": [7, 11], "ncurs": [7, 11], "nettl": [7, 11], "ninja": [7, 11], "patch": 7, "perl": [7, 8], "thread": 7, "queue": 7, "pixman": [7, 11], "pulseaudio": [7, 11], "lib": [7, 11], "sdl2": [7, 11], "snappi": [7, 11], "systemtap": [7, 11], "sdt": [7, 11], "unzip": [7, 27], "vte291": [7, 11], "which": [7, 13, 19], "zlib": [7, 11], "libmicrohttpd": 7, "libsq3": 7, "libarch": 7, "gettext": 7, "libmpc": [7, 25], "mpfr": 7, "clang": 7, "llvm": 7, "static": [7, 14], "mai": [7, 9], "here": [7, 19, 21, 25, 26], "refer": 7, "softwar": 7, "start": [7, 9, 18, 19, 22], "runtime_2": 7, "26": 7, "amd64": 7, "deb": 7, "utilities_2": 7, "runtim": [7, 13], "x86_64": [7, 9], "rpm": 7, "note": [7, 9], "bash_profil": 7, "default": [7, 9, 13, 27], "instead": [7, 13, 19], "place": [7, 9, 26], "base": 7, "repo": [7, 25, 27], "arc": [7, 10, 11, 13, 15, 16, 18, 21, 22, 24, 26, 27, 28], "elf32": [7, 13, 15, 16, 18, 21, 24, 25, 26], "elf": [7, 13, 16, 17, 18, 24, 25], "arc32": [7, 13, 25], "uclibc": [7, 25], "i686": 7, "w64": 7, "mingw32": 7, "qemu": [7, 10, 13, 15, 16, 22, 23, 25], "qemu_hom": [7, 11], "buildroot": [7, 10, 13, 22], "ld_library_path": [7, 25], "function": [7, 13], "clean_path": 7, "echo": [7, 27], "sed": 7, "mnt": [7, 9], "clean_ld": 7, "unset": [7, 25], "its": 7, "name": [7, 13, 21, 22, 25, 27], "sai": 7, "remov": [7, 21], "desir": 7, "substr": 7, "shamelessli": 7, "stolen": 7, "unix": [7, 13], "stackexchang": 7, "291611": 7, "path_remov": 7, "delet": [7, 20], "part": 7, "so": [7, 9, 21], "we": [7, 14, 21], "never": 7, "accident": 7, "sub": 7, "ani": [7, 9, 27], "instanc": [7, 27], "middl": 7, "begin": 7, "end": [7, 16], "f": [7, 22, 24, 27], "config": [7, 9, 15], "global": [7, 15, 22], "yurii": [7, 9, 22], "kolerov": [7, 9, 22], "email": [7, 11], "proto": 7, "tlsv1": 7, "ssf": 7, "sh": [7, 15, 22, 25], "rustup": 7, "r": [7, 8, 16, 22, 27], "libsqlite3": 7, "sourcewar": 7, "checkout": [7, 9, 19, 25], "0": [7, 9, 11, 13, 15, 16, 17, 21, 22, 24, 27], "189": 7, "autoreconf": 7, "fi": [7, 9], "prefix": [7, 11, 25], "maintain": 7, "mode": [7, 13, 22], "environ": [7, 10, 15, 26], "23": [7, 19], "version": [7, 9, 19, 25, 26], "becaus": [7, 13, 21, 25, 26], "commit": [7, 19], "pub": [7, 22], "scm": [7, 19], "id": [7, 13, 22, 27], "9712d9ec929fb6b3595d2970bbbac8b0b1c10ead": 7, "It": [7, 13, 14, 25, 26], "lead": [7, 21], "gener": [7, 10, 12, 13, 17, 21, 22, 27], "btf": 7, "inform": [7, 17, 21], "64": [7, 17, 26], "bit": [7, 26], "enumer": 7, "howev": 7, "below": 7, "don": [7, 21], "t": [7, 19, 21, 22], "support": [7, 13], "structur": 7, "crash": [7, 24], "while": [7, 13, 18], "libdw": 7, "b": [7, 16, 19, 24], "v1": 7, "d__lib": 7, "dcmake_install_prefix": 7, "recurs": 7, "submodul": 7, "libbpf": 7, "src": [7, 25], "after": [8, 19, 21, 26, 27], "addit": 8, "vboxsf": 8, "header": [8, 25], "dkm": 8, "Then": [8, 21, 24, 27], "you": [8, 9, 11, 13, 14, 19, 21, 22, 24, 25, 26, 27], "attach": 8, "unam": 8, "multivers": 8, "x11": 8, "d": [9, 19, 24, 27], "cloud": 9, "docker": 9, "brew": 9, "tree": [9, 25], "unpack": 9, "import": 9, "systemd": 9, "basic": 9, "befor": 9, "chang": [9, 27], "etc": [9, 16, 22, 25], "conf": 9, "passwd": 9, "useradd": 9, "m": [9, 13, 16, 22], "avoid": 9, "problem": 9, "relat": 9, "corpor": 9, "vpn": 9, "found": [9, 14], "sakai135": 9, "distro": 9, "run": [9, 10, 12, 14, 15, 18, 22], "show": [9, 18, 20], "short": 9, "intro": 9, "exit": 9, "env": [9, 15], "userprofil": 9, "when": [9, 21], "open": 9, "termin": 9, "z": 9, "ex": [9, 18, 25], "app": 9, "p": [9, 11, 17, 19, 22], "grep": [9, 21], "vm": 9, "servic": [9, 22], "creat": [9, 13, 15, 16, 17, 20, 22, 27], "wslconfig": 9, "wsl2": 9, "memori": [9, 21], "8gb": 9, "4": [9, 17, 24, 27], "target": [9, 11, 12, 16, 18, 20, 22, 25, 27], "boot": 9, "true": 9, "network": 9, "generateresolvconf": 9, "fals": 9, "reboot": [9, 13, 16], "resolv": 9, "nameserv": 9, "compani": 9, "dn": 9, "search": [9, 10], "intern": 9, "resourc": 9, "libssl": 9, "libelf": 9, "bc": [9, 25], "microsoft": 9, "msft": 9, "21": [9, 17], "j": [9, 11, 25], "nproc": [9, 11, 25], "kconfig_config": 9, "cp": 9, "x86": [9, 17], "bzimag": 9, "how": [9, 20], "look": 9, "now": [9, 13, 22], "homepath": 9, "10gb": 9, "instruct": [9, 13, 18], "stephenreescart": 9, "exampl": [9, 13, 19, 21, 24, 25], "diskpart": 9, "10": [9, 18, 22], "19041": 9, "964": 9, "copyright": 9, "On": [9, 21], "comput": 9, "rdn8fhbscc": 9, "select": 9, "vdisk": 9, "appdata": 9, "canonicalgrouplimit": 9, "ubuntu20": 9, "04onwindows_79rhkp1fndgsc": 9, "localst": 9, "ext4": 9, "vhdx": 9, "successfulli": 9, "compact": [9, 21], "100": [9, 22], "percent": 9, "complet": 9, "sometim": 9, "laptop": 9, "do": 9, "those": 9, "step": 9, "sure": 9, "eclips": [10, 28], "plugin": [10, 28], "board": [10, 13, 22], "verif": 10, "compar": [10, 12, 20], "state": [10, 12], "random": [10, 12], "program": [10, 12, 13], "dejagnu": [10, 12], "test": [10, 12, 13, 14, 16, 19, 22], "binari": [10, 12, 17, 27], "snippet": 10, "gdb": [10, 12, 20, 21, 24, 25], "task": [10, 27], "glibc": [10, 23, 25, 26], "testsuit": [10, 15, 23], "fail": [10, 23], "vanilla": [10, 23], "some": [10, 17, 23], "stack": [10, 23], "oper": [10, 13, 23], "ar": [10, 13, 19, 21, 23], "present": [10, 23], "direct": [10, 23], "doe": [10, 13, 23, 24], "intend": [10, 23], "index": 10, "modul": 10, "page": [10, 14], "find": [11, 14, 19, 21, 22, 24, 25, 26], "good": [11, 19, 21], "tutori": 11, "wiki": 11, "project": [11, 19], "host": [11, 22, 25, 26], "libglib2": 11, "libpixman": 11, "libbluetooth": 11, "libcapston": 11, "libbrlapi": 11, "libbz2": 11, "libcurl4": 11, "gnutl": 11, "libgtk": 11, "3": [11, 25, 27], "libjpeg8": 11, "libnuma": 11, "librbd": 11, "libsasl2": 11, "libsdl2": 11, "libsnappi": 11, "libvd": 11, "libvdeplug": 11, "libvt": 11, "91": 11, "libxen": 11, "liblzo2": 11, "valgrind": 11, "xfslib": 11, "glib2": 11, "retriev": [11, 26], "sourc": [11, 21, 25], "code": [11, 13, 14, 20, 24], "list": [11, 19], "softmmu": 11, "debug": 11, "tcg": 11, "variabl": 11, "bare": [12, 26], "metal": [12, 26], "metawar": 12, "toolkit": 12, "server": [12, 22], "consid": [13, 21, 24], "simpl": 13, "save": [13, 27], "includ": [13, 16, 24, 25, 27], "stdio": [13, 16, 24], "int": [13, 16, 24], "printf": [13, 16, 24], "hello": [13, 16, 21], "n": [13, 16, 21, 22], "return": [13, 16, 24], "ha": [13, 14, 17, 19, 21], "sim": [13, 15, 16], "purpos": 13, "If": [13, 21], "semihost": 13, "option": [13, 14, 19, 20], "pass": 13, "charact": 13, "hard": 13, "0x90000000": 13, "address": 13, "A": 13, "built": [13, 21], "spec": [13, 16], "write": 13, "hs4x": [13, 24, 26], "mcpu": [13, 16, 21, 24], "system": [13, 16, 22, 24], "cpu": [13, 16, 22, 25], "1g": [13, 16], "monitor": [13, 16], "none": [13, 16, 22, 25], "displai": [13, 16, 18, 22], "nograph": [13, 16, 22], "hs5x": [13, 24], "hs6x": [13, 25, 26], "same": [13, 21, 27], "input": 13, "output": 13, "interfac": 13, "nsim": [13, 16], "nsim_emt": [13, 16], "standard": [13, 14], "ouput": 13, "both": [13, 20, 24], "But": [13, 21], "possibl": 13, "implement": [13, 17], "own": 13, "hostlink": 13, "meet": [13, 21], "requir": 13, "actual": [13, 21], "have": [13, 14], "just": [13, 21], "one": 13, "_write": 13, "handl": 13, "const": 13, "char": 13, "buf": 13, "unsign": 13, "count": 13, "slightli": 13, "modifi": 13, "libqemu": 13, "newlib": [13, 21, 25], "compil": [13, 14, 17, 21, 24], "along": 13, "ccac": [13, 24], "av2h": [13, 24], "hhostlib": 13, "av3h": [13, 24], "arcv3": [13, 25], "right": 13, "happen": [13, 21], "absent": 13, "see": [13, 19, 21], "issu": [13, 21, 22, 26], "read": 13, "document": 13, "detail": [13, 19], "port": [13, 16], "1234": [13, 16, 18], "listet": 13, "through": 13, "socket": 13, "chardev": 13, "tmp": [13, 15], "wait": 13, "off": [13, 16], "gdb0": 13, "virt": [13, 22], "machin": 13, "vmlinux": [13, 22], "also": [13, 21, 24, 27], "loader": 13, "must": 13, "hx6x": 13, "csmith": 14, "emb": 14, "utah": 14, "edu": 14, "dynam": 14, "conform": 14, "c99": 14, "stress": 14, "analyz": 14, "other": [14, 21], "process": [14, 21], "bug": [14, 26], "everi": [14, 18, 21], "report": 14, "more": [14, 21], "than": 14, "400": 14, "previous": 14, "unknown": [14, 15], "argc": 14, "div": 14, "float": 14, "To": 14, "anoth": [14, 26], "hh": 14, "prepar": [15, 22, 26], "site": 15, "exp": 15, "separ": 15, "srcdir": 15, "compsrc": 15, "objdir": 15, "tmpdir": 15, "target_alia": 15, "target_triplet": 15, "arc_board_dir": 15, "qemu_serial_io": 15, "info": 15, "exist": [15, 19, 21], "boards_dir": 15, "lappend": 15, "baseboard": 15, "verbos": [15, 16], "target_list": 15, "runtest": 15, "content": [16, 21, 22, 27], "world": 16, "g": [16, 21, 22, 24], "o0": [16, 21, 22, 25], "nsimdrv": 16, "tcf": 16, "nsim_hom": 16, "templat": 16, "hs48_full": 16, "width": 16, "height": 16, "defin": [16, 21], "hook": 16, "quit": 16, "confirm": 16, "remot": [16, 18, 20], "load": [16, 18], "continu": 16, "log": [16, 19, 25], "overwrit": [16, 21], "regist": 16, "txt": [16, 22], "batch": 16, "caus": 17, "line": [17, 21, 22], "wa": [17, 19], "invok": 17, "record": 17, "object": 17, "being": 17, "onli": [17, 19], "exact": 17, "format": [17, 21, 24], "usual": 17, "take": 17, "form": 17, "section": 17, "ascii": 17, "text": [17, 21], "afterward": 17, "execut": 17, "o2": 17, "readelf": 17, "out": [17, 21, 25], "string": [17, 21], "dump": 17, "mtune": 17, "13": [17, 19, 25], "march": 17, "25": 17, "q": 17, "help": [17, 21], "disassembli": 18, "next": 18, "time": 18, "stop": 18, "pc": 18, "x": [18, 26], "10i": 18, "onelin": 19, "graph": 19, "decor": 19, "abbrev": 19, "v5": [19, 22], "shahab": 19, "bpf": 19, "jit": 19, "switch": [19, 20], "ad": 19, "origin": 19, "prior": 19, "As": 19, "suppos": 19, "try": 19, "broke": 19, "featur": 19, "known": [19, 26], "v2": 19, "rc2": 19, "session": 19, "bad": [19, 21], "current": 19, "The": 19, "alreadi": 19, "been": 19, "push": 19, "merg": 19, "localbranchnam": 19, "want": 19, "forc": 19, "even": [19, 21], "hasn": 19, "yet": 19, "remotebranchnam": 19, "synchron": 19, "flag": 19, "mean": 19, "prune": 19, "fetch": 19, "longer": 19, "www": [19, 27], "freecodecamp": 19, "new": 19, "frecord": 20, "statu": 20, "branch": 20, "bisect": 20, "initi": [21, 22], "describ": [21, 22], "344": 21, "turn": 21, "differ": 21, "seem": 21, "consequ": 21, "leakag": 21, "somewher": 21, "assembl": 21, "this_name_must_be_in_debug": 21, "nop": 21, "11": [21, 27], "objdump": [21, 24], "wi": 21, "dw_at_nam": 21, "indirect": 21, "offset": 21, "0x0": 21, "macro": 21, "unlik": 21, "poor": 21, "put": 21, "preprocess": 21, "expand": 21, "gdwarf": 21, "get": [21, 22, 25, 26], "task_arc64_dwarf": 21, "extra": 21, "gap": 21, "too": [21, 24], "big": 21, "him": 21, "know": 21, "skip": 21, "debug_lin": 21, "alwai": 21, "filenam": 21, "symbol": 21, "number": 21, "comment": [21, 22], "think": 21, "binutil": 21, "blob": 21, "ga": 21, "dwarf2dbg": 21, "l2812": 21, "overwritten": 21, "sens": 21, "mayb": 21, "stage": 21, "platform": 21, "intel": 21, "side": 21, "arm": 21, "question": 21, "why": 21, "properli": 21, "whet": 21, "valid": 21, "cannot": [21, 24], "thu": 21, "easiest": 21, "wai": 21, "prevent": 21, "thei": 21, "useless": 21, "context": 21, "undefin": 21, "behavior": 21, "need": [21, 27], "147": 22, "anonuid": 22, "anongid": 22, "u": 22, "respect": 22, "rw": 22, "all_squash": 22, "1000": 22, "no_subtree_check": 22, "insecur": 22, "rule": 22, "firewal": 22, "systemctl": 22, "rpcbind": 22, "sshd": 22, "cmd": 22, "perman": 22, "nfs3": 22, "mountd": 22, "rpc": 22, "bind": 22, "reload": 22, "exportf": 22, "ip": 22, "tuntap": 22, "tap1": 22, "addr": 22, "42": 22, "24": 22, "link": 22, "up": 22, "buildroot_build": 22, "glibc_test_defconfig": 22, "br2_toolchain_external_wchar": 22, "br2_toolchain_external_inet_rpc": 22, "br2_toolchain_buildroot_cxx": 22, "br2_target_optim": 22, "br2_toolchain_glibc_gconv_libs_copi": 22, "br2_system_dhcp": 22, "eth0": 22, "br2_rootfs_users_t": 22, "tabl": 22, "br2_package_host_linux_headers_custom_5_16": 22, "br2_package_openssh": 22, "br2_package_ntp": 22, "br2_package_ntp_ntpd": 22, "br2_package_nfs_util": 22, "br2_package_sshf": 22, "br2_package_haveg": 22, "br2_package_mak": 22, "br2_package_override_fil": 22, "buildroot_overrid": 22, "config_nfs_f": 22, "config_namespac": 22, "config_uts_n": 22, "config_ipc_n": 22, "config_user_n": 22, "config_pid_n": 22, "config_net_n": 22, "config_cgroup": 22, "config_memcg": 22, "config_ipv6": 22, "linux_override_srcdir": 22, "task_glibc_mmu_bug": 22, "glibc_override_srcdir": 22, "tag": 22, "36": 22, "cat": 22, "corp": 22, "usernam": 22, "uid": 22, "gid": 22, "password": 22, "shell": 22, "dirclean": 22, "netdev": 22, "net0": 22, "ifnam": 22, "downscript": 22, "virtio": 22, "freq_hz": 22, "50000000": 22, "ifconfig": 22, "ping": 22, "addus": 22, "ssh": 22, "kei": 22, "copi": 22, "public": 22, "keygen": 22, "rsa": 22, "id_rsa": 22, "full": 22, "realpath": [22, 25], "66": 22, "ga1dc0be03c9dd850b864bd7a9c03cf8e396eb7ca": 22, "mount": 22, "__full_path_to_glibc_source__": 22, "nfg": 22, "nolock": 22, "sshf": 22, "idmap": 22, "allow_oth": 22, "go": 22, "wrapper": 22, "cross": [22, 26], "check": 22, "4x": [24, 25], "5x": 24, "mwdt": 24, "recogn": 24, "littlearc64": 24, "00000004": 24, "c0f1": 24, "shor": 24, "0xc0f1": 24, "740c": 24, "mov_": 24, "r0": 24, "8": 24, "752c": 24, "r1": 24, "exactli": 24, "push_": 24, "blink": 24, "opcod": 24, "automak": 25, "autotool": 25, "libmpfr": 25, "libgmp": 25, "libncurs": 25, "patchutil": 25, "obtain": 25, "cg": 25, "arcv2": [25, 26], "multilib": [25, 26], "disabl": 25, "werror": 25, "cflag": 25, "g3": 25, "fvar": 25, "track": 25, "assign": 25, "cxxflag": 25, "mrproper": 25, "headers_instal": 25, "cross_compil": 25, "install_hdr_path": 25, "For": 25, "my": 25, "l": 25, "builder_path": 25, "headers_path": 25, "out_dir": 25, "log_fil": 25, "rm": [25, 27], "rf": 25, "touch": 25, "configure_linux": 25, "fpu": 25, "configure_baremet": 25, "clean": [25, 27], "v": 25, "tee": 25, "build_and_instal": 25, "lzip": 25, "pack": 25, "lz": 25, "gmplib": 25, "xvf": 25, "usr": 25, "destdir": 25, "sysroot": 25, "gitlab": 25, "inria": 25, "fr": 25, "autogen": 25, "product": 26, "bootstrap": 26, "ct": 26, "menuconfig": 26, "move": 26, "well": 26, "1809": 26, "most": 26, "interest": 26, "wide": 26, "rang": 26, "arcompact": 26, "arc600": 26, "arc700": 26, "aec": 26, "hs3x": 26, "dlcdn": 27, "apach": 27, "jdk": 27, "oracl": 27, "eg": 27, "java": 27, "technologi": 27, "javas": 27, "jdk11": 27, "2020": 27, "03": 27, "cdt": 27, "cc": 27, "incub": 27, "compon": 27, "arc_gnu_eclips": 27, "extract": 27, "let": 27, "later": 27, "mvn": 27, "java_hom": 27, "17": 27, "dmaven": 27, "2019": 27, "snapshot": 27, "zip": 27, "dropin": 27, "artifact": 27, "jar": 27, "dosgi": 27, "area": 27, "arc_gnu_ide_workspac": 27, "ini": 27}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"em": 0, "starter": 0, "kit": [0, 1], "h": [1, 3], "develop": [1, 2, 13], "board": 2, "build": [3, 7, 9, 11, 13, 25, 26, 27], "linux": [3, 7, 8, 9, 13, 22, 25], "imag": 3, "tabl": [3, 7, 10, 12], "content": [3, 7, 12], "us": [3, 12, 13, 17, 27], "resourc": 3, "obtain": 3, "buildroot": [3, 4, 5], "configur": [3, 4, 7, 8, 9, 22], "arc": [3, 25], "3x": 3, "4x": 3, "glibc": [3, 22], "5x": 3, "uclibc": 3, "6x": 3, "predefin": 3, "addit": 3, "option": [3, 17], "environ": [6, 25], "all": [7, 8], "distribut": [7, 8], "setup": 7, "cento": [7, 8], "7": [7, 8], "ubuntu": [7, 8, 9, 11, 22], "22": [7, 8, 22], "04": [7, 8, 22], "fedora": [7, 9, 11, 22], "37": [7, 22], "instal": [7, 9, 11], "digil": 7, "adept": 7, "2": 7, "profil": 7, "bashrc": 7, "git": [7, 19], "rust": 7, "elfutil": 7, "pahol": 7, "bpftool": 7, "guest": 8, "virtualbox": 8, "18": 8, "wsl": 9, "vpnkit": 9, "kernel": [9, 13, 22], "6": 9, "1": 9, "file": [9, 21], "shrink": 9, "virtual": 9, "disk": 9, "": [9, 10], "space": 9, "yurii": 10, "kolerov": 10, "document": 10, "indic": 10, "qemu": [11, 12, 24], "packag": 11, "verif": [12, 14, 16], "run": [13, 16], "binari": 13, "bare": 13, "metal": 13, "target": [13, 17], "gcc": [13, 17], "metawar": 13, "toolkit": 13, "gdb": [13, 16, 18], "server": [13, 16], "gener": 14, "random": 14, "program": 14, "dejagnu": 15, "test": 15, "compar": [16, 19], "state": 16, "compil": 16, "an": 16, "exampl": 16, "client": 16, "frecord": 17, "switch": 17, "show": 17, "statu": 17, "branch": 19, "creat": 19, "from": [19, 25, 26], "remot": 19, "bisect": 19, "code": 19, "how": 19, "delet": 19, "both": 19, "local": 19, "snippet": 20, "direct": 21, "doe": 21, "work": 21, "intend": 21, "The": [21, 22], "problem": [21, 22], "reproduc": [21, 22], "solut": 21, "testsuit": 22, "fail": 22, "vanilla": 22, "nf": 22, "wsl2": 22, "tap": 22, "interfac": 22, "task": 23, "some": 24, "stack": 24, "oper": 24, "ar": 24, "present": 24, "gnu": [25, 28], "toolchain": [25, 28], "prepar": 25, "baremet": 25, "script": 25, "gmp": 25, "mpfr": 25, "binutil": 25, "crosstool": 26, "ng": 26, "eclips": 27, "plugin": 27, "maven": 27, "debug": 27, "pdt": 27}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"EM Starter Kit": [[0, "em-starter-kit"]], "HS Development Kit": [[1, "hs-development-kit"]], "Development Boards": [[2, "development-boards"]], "Build Linux images": [[3, "build-linux-images"]], "Table of Contents": [[3, "table-of-contents"], [7, "table-of-contents"], [12, null]], "Useful resources": [[3, "useful-resources"]], "Obtaining Buildroot": [[3, "obtaining-buildroot"]], "Build images": [[3, "build-images"]], "Configuring Buildroot": [[3, "configuring-buildroot"]], "ARC HS 3x/4x (glibc)": [[3, "arc-hs-3x-4x-glibc"]], "ARC HS 5x (uClibc)": [[3, "arc-hs-5x-uclibc"]], "ARC HS 6x (glibc)": [[3, "arc-hs-6x-glibc"]], "Predefined configurations": [[3, "predefined-configurations"]], "Additional configuration options": [[3, "additional-configuration-options"]], "Buildroot configuration": [[4, "buildroot-configuration"]], "Buildroot": [[5, "buildroot"]], "Environment": [[6, "environment"]], "Configuring Linux": [[7, "configuring-linux"]], "All Linux Distributions": [[7, "all-linux-distributions"], [8, "all-linux-distributions"]], "Setup CentOS 7": [[7, "setup-centos-7"]], "Setup Ubuntu 22.04": [[7, "setup-ubuntu-22-04"]], "Setup Fedora 37": [[7, "setup-fedora-37"]], "Install Digilent Adept 2": [[7, "install-digilent-adept-2"]], "Configure .profile": [[7, "configure-profile"]], "Configure .bashrc": [[7, "configure-bashrc"]], "Setup Git": [[7, "setup-git"]], "Install Rust": [[7, "install-rust"]], "Build and Install elfutils": [[7, "build-and-install-elfutils"]], "Build and Install pahole": [[7, "build-and-install-pahole"]], "Build and Install bpftool": [[7, "build-and-install-bpftool"]], "Configuring Guest Linux for VirtualBox": [[8, "configuring-guest-linux-for-virtualbox"]], "CentOS 7": [[8, "centos-7"]], "Ubuntu 18.04": [[8, "ubuntu-18-04"]], "Ubuntu 22.04": [[8, "ubuntu-22-04"]], "Configuring WSL": [[9, "configuring-wsl"]], "Install Ubuntu": [[9, "install-ubuntu"]], "Install Fedora": [[9, "install-fedora"]], "Install wsl-vpnkit": [[9, "install-wsl-vpnkit"]], "Configure WSL": [[9, "configure-wsl"]], "Build and Install the Linux Kernel 6.1": [[9, "build-and-install-the-linux-kernel-6-1"]], "Configuration Files": [[9, "configuration-files"]], "Shrink virtual disk\u2019s space": [[9, "shrink-virtual-disk-s-space"]], "Yuriy Kolerov\u2019s documentation": [[10, "yuriy-kolerov-s-documentation"]], "Indices and tables": [[10, "indices-and-tables"]], "Building QEMU": [[11, "building-qemu"]], "Install packages for Ubuntu": [[11, "install-packages-for-ubuntu"]], "Install packages for Fedora": [[11, "install-packages-for-fedora"]], "Build and install QEMU": [[11, "build-and-install-qemu"]], "QEMU": [[12, "qemu"]], "Verification of QEMU": [[12, "verification-of-qemu"]], "Using QEMU": [[12, "using-qemu"]], "Building and running binaries": [[13, "building-and-running-binaries"]], "Build binaries for bare metal targets using GCC": [[13, "build-binaries-for-bare-metal-targets-using-gcc"]], "Build binaries for bare metal targets using MetaWare Development Toolkit": [[13, "build-binaries-for-bare-metal-targets-using-metaware-development-toolkit"]], "Run a GDB server": [[13, "run-a-gdb-server"], [16, "run-a-gdb-server"]], "Running the Linux kernel": [[13, "running-the-linux-kernel"]], "Verification by generating random programs": [[14, "verification-by-generating-random-programs"]], "DejaGnu tests": [[15, "dejagnu-tests"]], "Verification by comparing states": [[16, "verification-by-comparing-states"]], "Compile an example": [[16, "compile-an-example"]], "Run a GDB client": [[16, "run-a-gdb-client"]], "GCC": [[17, "gcc"]], "Using -frecord-gcc-switches": [[17, "using-frecord-gcc-switches"]], "Show status of target options": [[17, "show-status-of-target-options"]], "GDB": [[18, "gdb"]], "Git": [[19, "git"]], "Compare Branches": [[19, "compare-branches"]], "Create a Branch from Remote": [[19, "create-a-branch-from-remote"]], "Bisect Code": [[19, "bisect-code"]], "How to Delete a Git Branch Both Locally and Remotely": [[19, "how-to-delete-a-git-branch-both-locally-and-remotely"]], "Snippets": [[20, "snippets"]], "\ud83d\udfe2 .file directive does not work as intended": [[21, "file-directive-does-not-work-as-intended"]], "The Problem": [[21, "the-problem"], [22, "the-problem"]], "Reproduce": [[21, "reproduce"], [22, "reproduce"]], "Solution": [[21, "solution"]], "\ud83d\udfe1 glibc testsuite fails with vanilla Linux kernels": [[22, "glibc-testsuite-fails-with-vanilla-linux-kernels"]], "Configure NFS (Fedora 37)": [[22, "configure-nfs-fedora-37"]], "Configure NFS (WSL2 with Ubuntu 22.04)": [[22, "configure-nfs-wsl2-with-ubuntu-22-04"]], "Configure TAP interface": [[22, "configure-tap-interface"]], "Tasks": [[23, "tasks"]], "\ud83d\udfe1 Some stack operations are not presented in QEMU": [[24, "some-stack-operations-are-not-presented-in-qemu"]], "Building from arc-gnu-toolchain": [[25, "building-from-arc-gnu-toolchain"]], "Prepare environment": [[25, "prepare-environment"]], "Build baremetal toolchain": [[25, "build-baremetal-toolchain"]], "Build Linux toolchain": [[25, "build-linux-toolchain"]], "Scripts": [[25, "scripts"]], "Build GMP and MPFR for Binutils": [[25, "build-gmp-and-mpfr-for-binutils"]], "Building from crosstool-ng": [[26, "building-from-crosstool-ng"]], "Eclipse Plugin": [[27, "eclipse-plugin"]], "Build using Maven": [[27, "build-using-maven"]], "Build and Debug Using Eclipse PDT": [[27, "build-and-debug-using-eclipse-pdt"]], "GNU Toolchain": [[28, "gnu-toolchain"]]}, "indexentries": {}})