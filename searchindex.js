Search.setIndex({"docnames": ["buildroot/build", "buildroot/config", "buildroot/index", "environment/index", "environment/linux", "environment/wsl", "index", "qemu/build", "qemu/index", "qemu/using", "qemu/verification/csmith", "qemu/verification/dejagnu", "qemu/verification/state", "snippets/gcc", "snippets/gdb", "snippets/git", "snippets/index", "tasks/binutils_file_bug", "tasks/glibc_mmu_bug", "tasks/index", "tasks/qemu_stack_ops", "toolchain/build-dev", "toolchain/build-prod", "toolchain/eclipse", "toolchain/index"], "filenames": ["buildroot/build.rst", "buildroot/config.rst", "buildroot/index.rst", "environment/index.rst", "environment/linux.rst", "environment/wsl.rst", "index.rst", "qemu/build.rst", "qemu/index.rst", "qemu/using.rst", "qemu/verification/csmith.rst", "qemu/verification/dejagnu.rst", "qemu/verification/state.rst", "snippets/gcc.rst", "snippets/gdb.rst", "snippets/git.rst", "snippets/index.rst", "tasks/binutils_file_bug.rst", "tasks/glibc_mmu_bug.rst", "tasks/index.rst", "tasks/qemu_stack_ops.rst", "toolchain/build-dev.rst", "toolchain/build-prod.rst", "toolchain/eclipse.rst", "toolchain/index.rst"], "titles": ["Build Linux images", "Buildroot configuration", "Buildroot", "Environment", "Linux", "WSL", "Yuriy Kolerov\u2019s documentation", "Building QEMU", "QEMU", "Building and running binaries", "Verification by generating random programs", "DejaGnu tests", "Verification by comparing states", "GCC", "GDB", "Git", "Snippets", "\ud83d\udfe2 <code class=\"docutils literal notranslate\"><span class=\"pre\">.file</span></code> directive does not work as intended", "\ud83d\udfe1 glibc testsuite fails with vanilla Linux kernels", "Tasks", "\ud83d\udfe1 Some stack operations are not presented in QEMU", "Building from <code class=\"docutils literal notranslate\"><span class=\"pre\">arc-gnu-toolchain</span></code>", "Building from <code class=\"docutils literal notranslate\"><span class=\"pre\">crosstool-ng</span></code>", "Eclipse Plugin", "GNU Toolchain"], "terms": {"manual": [0, 17], "http": [0, 4, 5, 7, 10, 11, 15, 17, 18, 21, 22, 23], "org": [0, 4, 7, 15, 21, 23], "download": [0, 5, 21, 23], "html": [0, 23], "train": 0, "bootlin": 0, "com": [0, 4, 5, 7, 11, 15, 17, 18, 21, 22, 23], "doc": [0, 15], "slide": 0, "pdf": 0, "prerequisit": 0, "packag": [0, 4, 5, 8, 23], "can": [0, 4, 5, 7, 10, 17, 18, 20, 21, 22], "instal": [0, 3, 8, 18, 21, 22, 23], "ubuntu": [0, 3, 8], "22": [0, 3, 5], "04": [0, 3, 5], "follow": [0, 5, 15], "command": [0, 5, 10, 12, 13, 14, 17, 23], "sudo": [0, 4, 5, 7, 18, 21, 22], "apt": [0, 4, 5, 7, 21, 22], "texinfo": [0, 4, 21, 22], "byacc": [0, 4, 22], "flex": [0, 4, 5, 21, 22], "essenti": [0, 4, 5, 21, 22], "git": [0, 3, 5, 6, 7, 11, 16, 18, 21, 22], "firstli": [0, 21, 22, 23], "would": 0, "better": [0, 5], "set": [0, 5, 11, 12, 18], "share": [0, 21], "directori": [0, 5, 11, 18, 21, 22, 23], "bashrc": [0, 3, 7], "export": [0, 4, 7, 11, 18, 21, 23], "br2_dl_dir": [0, 4], "home": [0, 5, 11, 17, 18, 22, 23], "workspac": [0, 11, 17, 18], "o": [0, 9, 12, 17, 18, 20], "buildroot_dl": [0, 4], "clone": [0, 4, 5, 7, 11, 18, 21, 22, 23], "synopsi": [0, 4, 7, 11, 15, 17, 18, 21, 22, 23], "repositori": [0, 4, 21, 22, 23], "github": [0, 4, 5, 7, 11, 17, 18, 21, 22, 23], "foss": [0, 7, 11, 17, 18, 21, 22, 23], "dwc": [0, 7, 11, 17, 18, 21, 22, 23], "processor": [0, 5, 7, 11, 17, 18, 21, 22, 23], "upstream": [0, 18], "net": [0, 5, 18], "tar": [0, 5, 21, 23], "gz": [0, 5, 23], "archiv": [0, 23], "wget": [0, 4, 21, 22], "2022": [0, 17, 18], "08": 0, "xf": 0, "mv": 0, "mkdir": [0, 4, 5, 7, 18, 21], "cd": [0, 4, 5, 7, 11, 18, 21, 22], "thi": [0, 4, 5, 9, 10, 12, 13, 15, 17, 18, 20], "make": [0, 4, 5, 7, 9, 17, 18, 21, 22], "c": [0, 4, 5, 9, 10, 12, 13, 15, 17, 18, 20], "readlink": [0, 18], "e": [0, 4, 17, 18], "defconfig": [0, 18], "path": [0, 4, 7, 9, 18, 21, 23], "your": [0, 4, 5, 7, 9, 15, 21, 22, 23], "snps_archs38_haps_defconfig": 0, "toolchain": [0, 4, 6, 11, 17, 18, 22], "br2_arcl": [0, 18], "y": [0, 18, 21, 22], "br2_archs38": [0, 18], "br2_gcc_version_12_x": [0, 18], "br2_toolchain_uses_glibc": [0, 18], "br2_install_libstdcpp": [0, 18], "br2_enable_local": [0, 18], "br2_use_wchar": [0, 18], "br2_linux_kernel": [0, 18], "br2_linux_kernel_defconfig": [0, 18], "haps_h": [0, 18], "br2_linux_kernel_custom_vers": [0, 18], "br2_linux_kernel_custom_version_valu": [0, 18], "5": [0, 17, 18, 20, 21, 23], "16": [0, 17, 18, 21], "br2_linux_kernel_vmlinux": [0, 18], "br2_target_rootfs_initramf": [0, 18], "prebuilt": [0, 5], "09": [0, 17, 18], "br2_toolchain_extern": [0, 18], "br2_toolchain_external_custom": [0, 18], "br2_toolchain_external_custom_glibc": [0, 18], "br2_toolchain_external_download": 0, "br2_toolchain_external_url": 0, "releas": [0, 5, 18, 23], "arc_gnu_2022": 0, "09_prebuilt_glibc_le_archs_linux_instal": 0, "br2_toolchain_external_local": [0, 18], "br2_toolchain_external_has_ssp": [0, 18], "br2_toolchain_external_cxx": [0, 18], "br2_toolchain_external_headers_5_16": [0, 18], "br2_toolchain_external_gdb_server_copi": [0, 18], "contain": [0, 4, 13], "snps_arc32_defconfig": 0, "snps_arc64_defconfig": 0, "snps_arc700_axs101_defconfig": 0, "snps_archs38_axs103_defconfig": 0, "snps_archs38_hsdk_defconfig": 0, "from": [0, 4, 5, 6, 9, 10, 16, 17, 24], "i": [0, 5, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 21], "br2_toolchain_external_path": [0, 18], "arch": [0, 5, 9, 12, 17, 18, 20, 21, 22], "snp": [0, 5, 18, 22], "gnu": [0, 4, 6, 11, 18, 22], "br2_toolchain_external_custom_prefix": [0, 18], "an": [0, 5, 9, 15, 17, 21, 23], "overlai": [0, 18], "br2_rootfs_overlai": [0, 18], "br2_linux_kernel_config_fragment_fil": [0, 18], "fragment": [0, 18], "custom": 0, "br2_linux_kernel_custom_git": 0, "br2_linux_kernel_custom_repo_url": 0, "br2_linux_kernel_custom_repo_vers": 0, "arc64": [0, 4, 7, 9, 20, 21, 22], "build": [2, 3, 6, 8, 11, 18, 24], "linux": [2, 3, 6, 7, 8, 19, 22], "imag": [2, 5, 6, 9, 18], "configur": [2, 3, 6, 7, 21, 22], "bootstrap": [3, 22], "fedora": [3, 8], "37": [3, 5], "profil": [3, 5, 7], "setup": 3, "rust": 3, "elfutil": 3, "pahol": 3, "bpftool": 3, "wsl": [3, 6], "vpnkit": 3, "kernel": [3, 4, 6, 8, 12, 19], "6": [3, 4, 15, 20, 21], "1": [3, 4, 7, 11, 17, 18, 21], "file": [3, 4, 6, 9, 11, 12, 13, 18, 19, 20, 21], "shrink": [3, 17], "virtual": 3, "disk": 3, "": [3, 4, 9, 10, 12, 17, 18, 21, 22, 23], "space": 3, "virtualbox": 4, "guest": 4, "addit": 4, "add": [4, 5, 7, 9, 17, 18], "multivers": 4, "updat": 4, "util": [4, 5, 18, 22], "x11": 4, "common": [4, 21], "vim": 4, "mc": 4, "nmap": 4, "mercuri": 4, "subvers": 4, "cmake": 4, "autoconf": [4, 21, 22], "tmux": 4, "screen": 4, "minicom": 4, "htop": 4, "curl": [4, 7, 21], "rsync": [4, 22], "python3": [4, 7, 22], "pip": 4, "venv": 4, "ipython3": 4, "us": [4, 5, 6, 10, 12, 15, 16, 17, 18, 20, 21, 22], "crosstool": [4, 6, 24], "ng": [4, 6, 7, 24], "our": 4, "script": [4, 11, 12, 18], "help2man": [4, 22], "libtool": [4, 21, 22], "bin": [4, 5, 7, 11, 18, 21, 22, 23], "libncurses5": [4, 7, 22], "dev": [4, 5, 7, 18, 21, 22], "zlib1g": [4, 7, 21, 22], "libexpat1": [4, 21, 22], "texliv": [4, 22], "gawk": [4, 21, 22], "bison": [4, 5, 21, 22], "xz": [4, 22], "local": [4, 5, 16, 22, 23], "main": [4, 9, 12, 14, 18, 20], "group": [4, 18], "dnf": [4, 5, 7, 18], "groupinstal": 4, "develop": [4, 8, 21, 23], "tool": [4, 5, 7, 10, 11, 18, 21, 22, 23], "librari": [4, 9], "all": [4, 9, 17], "necessari": [4, 5, 18, 22], "work": [4, 6, 15, 19], "depend": [4, 5, 13, 17, 23], "brlapi": [4, 7], "devel": [4, 7], "bzip2": [4, 7], "capston": [4, 7], "cyru": [4, 7], "sasl": [4, 7], "diffutil": 4, "dwarv": [4, 5], "expat": 4, "gcc": [4, 6, 8, 12, 16, 17, 20, 21], "gperf": [4, 21], "gtk3": [4, 7], "libaio": [4, 7], "libattr": [4, 7], "libcap": [4, 7], "libfdt": [4, 7], "libgcrypt": [4, 7], "libibverb": [4, 7], "libiscsi": [4, 7], "libjpeg": [4, 7], "libpng": [4, 7], "librdmacm": [4, 7], "libseccomp": [4, 7], "libssh": [4, 7], "libusbx": [4, 7], "libuuid": [4, 7], "lzo": [4, 7], "ncurs": [4, 7], "nettl": [4, 7], "ninja": [4, 7], "patch": 4, "perl": 4, "thread": 4, "queue": 4, "pixman": [4, 7], "pulseaudio": [4, 7], "lib": [4, 7], "sdl2": [4, 7], "snappi": [4, 7], "systemtap": [4, 7], "sdt": [4, 7], "unzip": [4, 23], "vte291": [4, 7], "which": [4, 9, 15], "zlib": [4, 7], "libmicrohttpd": 4, "libsq3": 4, "libarch": 4, "gettext": 4, "libmpc": [4, 21], "mpfr": 4, "clang": 4, "llvm": 4, "static": [4, 10], "note": [4, 5], "bash_profil": 4, "default": [4, 5, 9, 23], "user": [4, 5, 7, 18, 23], "instead": [4, 9, 15], "place": [4, 5, 22], "base": 4, "repo": [4, 21, 23], "arc": [4, 6, 7, 9, 11, 12, 14, 17, 18, 20, 22, 23, 24], "elf32": [4, 9, 11, 12, 14, 17, 20, 21, 22], "elf": [4, 9, 12, 13, 14, 20, 21], "arc32": [4, 9, 21], "uclibc": [4, 21], "i686": 4, "w64": 4, "mingw32": 4, "x86_64": [4, 5], "qemu": [4, 6, 9, 11, 12, 18, 19, 21], "qemu_hom": [4, 7], "buildroot": [4, 6, 9, 18], "ld_library_path": [4, 21], "function": [4, 9], "clean_path": 4, "echo": [4, 23], "sed": 4, "mnt": [4, 5], "clean_ld": 4, "unset": [4, 21], "its": 4, "name": [4, 9, 17, 18, 21, 23], "sai": 4, "remov": [4, 17], "desir": 4, "substr": 4, "shamelessli": 4, "stolen": 4, "unix": [4, 9], "stackexchang": 4, "291611": 4, "path_remov": 4, "delet": [4, 16], "part": 4, "so": [4, 5, 17], "we": [4, 10, 17], "never": 4, "accident": 4, "sub": 4, "ani": [4, 5, 23], "instanc": [4, 23], "middl": 4, "begin": 4, "end": [4, 12], "f": [4, 18, 20, 23], "config": [4, 5, 11], "global": [4, 11, 18], "yurii": [4, 5, 18], "kolerov": [4, 5, 18], "email": [4, 7], "ykolerov": [4, 5, 11, 17, 18, 23], "proto": 4, "tlsv1": 4, "2": [4, 5, 7, 11, 15, 18, 21], "ssf": 4, "sh": [4, 11, 18, 21], "rustup": 4, "r": [4, 12, 18, 23], "libsqlite3": 4, "sourcewar": 4, "checkout": [4, 5, 15, 21], "0": [4, 5, 7, 9, 11, 12, 13, 17, 18, 20, 23], "189": 4, "autoreconf": 4, "fi": [4, 5], "prefix": [4, 7, 21], "enabl": [4, 7, 12, 18, 21, 22], "maintain": 4, "mode": [4, 9, 18], "environ": [4, 6, 11, 22], "here": [4, 15, 17, 21, 22], "23": [4, 15], "version": [4, 5, 15, 21, 22], "becaus": [4, 9, 17, 21, 22], "commit": [4, 15], "latest": [4, 5], "pub": [4, 18], "scm": [4, 15], "id": [4, 9, 18, 23], "9712d9ec929fb6b3595d2970bbbac8b0b1c10ead": 4, "It": [4, 9, 10, 21, 22], "lead": [4, 17], "gener": [4, 6, 8, 9, 13, 17, 18, 23], "btf": 4, "inform": [4, 13, 17], "64": [4, 13, 22], "bit": [4, 22], "enumer": 4, "howev": 4, "below": 4, "don": [4, 17], "t": [4, 15, 17, 18], "support": [4, 9], "structur": 4, "crash": [4, 20], "while": [4, 9, 14], "libdw": 4, "b": [4, 12, 15, 20], "v1": 4, "d__lib": 4, "dcmake_install_prefix": 4, "recurs": 4, "submodul": 4, "libbpf": 4, "src": [4, 21], "d": [5, 15, 20, 23], "cloud": 5, "docker": 5, "brew": 5, "tree": [5, 21], "unpack": 5, "import": 5, "systemd": 5, "basic": 5, "befor": 5, "chang": [5, 23], "etc": [5, 12, 18, 21], "conf": 5, "passwd": 5, "useradd": 5, "bash": [5, 11, 21], "m": [5, 9, 12, 18], "avoid": 5, "problem": 5, "relat": 5, "corpor": 5, "vpn": 5, "mai": 5, "found": [5, 10], "sakai135": 5, "distro": 5, "run": [5, 6, 8, 10, 11, 14, 18], "show": [5, 14, 16], "short": 5, "intro": 5, "exit": 5, "env": [5, 11], "userprofil": 5, "start": [5, 14, 15, 18], "when": [5, 17], "you": [5, 7, 9, 10, 15, 17, 18, 20, 21, 22, 23], "open": 5, "termin": 5, "z": 5, "ex": [5, 14, 21], "app": 5, "p": [5, 7, 13, 15, 18], "grep": [5, 17], "vm": 5, "servic": [5, 18], "creat": [5, 9, 11, 12, 13, 16, 18, 23], "wslconfig": 5, "wsl2": 5, "memori": [5, 17], "8gb": 5, "4": [5, 13, 20, 23], "target": [5, 7, 8, 12, 14, 16, 18, 21, 23], "boot": 5, "true": 5, "network": 5, "generateresolvconf": 5, "fals": 5, "reboot": [5, 9, 12], "resolv": 5, "nameserv": 5, "compani": 5, "dn": 5, "search": [5, 6], "intern": 5, "resourc": 5, "libssl": 5, "libelf": 5, "bc": [5, 21], "microsoft": 5, "msft": 5, "21": [5, 13], "j": [5, 7, 21], "nproc": [5, 7, 21], "kconfig_config": 5, "cp": 5, "x86": [5, 13], "bzimag": 5, "how": [5, 16], "look": 5, "like": [5, 17], "now": [5, 9, 18], "homepath": 5, "10gb": 5, "instruct": [5, 9, 14], "stephenreescart": 5, "exampl": [5, 9, 15, 17, 20, 21], "diskpart": 5, "10": [5, 14, 18], "19041": 5, "964": 5, "copyright": 5, "On": [5, 17], "comput": 5, "rdn8fhbscc": 5, "select": 5, "vdisk": 5, "appdata": 5, "canonicalgrouplimit": 5, "ubuntu20": 5, "04onwindows_79rhkp1fndgsc": 5, "localst": 5, "ext4": 5, "vhdx": 5, "successfulli": 5, "compact": [5, 17], "100": [5, 18], "percent": 5, "complet": 5, "sometim": 5, "laptop": 5, "do": 5, "those": 5, "step": 5, "sure": 5, "eclips": [6, 24], "plugin": [6, 24], "verif": 6, "compar": [6, 8, 16], "state": [6, 8], "random": [6, 8], "program": [6, 8, 9], "dejagnu": [6, 8], "test": [6, 8, 9, 10, 12, 15, 18], "binari": [6, 8, 13, 23], "snippet": 6, "gdb": [6, 8, 16, 17, 20, 21], "task": [6, 23], "glibc": [6, 19, 21, 22], "testsuit": [6, 11, 19], "fail": [6, 19], "vanilla": [6, 19], "some": [6, 13, 19], "stack": [6, 19], "oper": [6, 9, 19], "ar": [6, 9, 15, 17, 19], "present": [6, 19], "direct": [6, 19], "doe": [6, 9, 19, 20], "intend": [6, 19], "index": 6, "modul": 6, "page": [6, 10], "find": [7, 10, 15, 17, 18, 20, 21, 22], "good": [7, 15, 17], "tutori": 7, "wiki": 7, "project": [7, 15], "host": [7, 18, 21, 22], "libglib2": 7, "libpixman": 7, "libbluetooth": 7, "libcapston": 7, "libbrlapi": 7, "libbz2": 7, "libcurl4": 7, "gnutl": 7, "libgtk": 7, "3": [7, 21, 23], "libjpeg8": 7, "libnuma": 7, "librbd": 7, "libsasl2": 7, "libsdl2": 7, "libsnappi": 7, "libvd": 7, "libvdeplug": 7, "libvt": 7, "91": 7, "libxen": 7, "liblzo2": 7, "valgrind": 7, "xfslib": 7, "glib2": 7, "retriev": [7, 22], "sourc": [7, 17, 21], "code": [7, 9, 10, 16, 20], "list": [7, 15], "softmmu": 7, "debug": 7, "tcg": 7, "variabl": 7, "bare": [8, 22], "metal": [8, 22], "metawar": 8, "toolkit": 8, "server": [8, 18], "consid": [9, 17, 20], "simpl": 9, "save": [9, 23], "includ": [9, 12, 20, 21, 23], "stdio": [9, 12, 20], "h": [9, 10, 12, 20, 21, 22], "int": [9, 12, 20], "printf": [9, 12, 20], "hello": [9, 12, 17], "n": [9, 12, 17, 18], "return": [9, 12, 20], "ha": [9, 10, 13, 15, 17], "sim": [9, 11, 12], "board": [9, 18], "purpos": 9, "If": [9, 17], "semihost": 9, "option": [9, 10, 15, 16], "pass": 9, "charact": 9, "devic": [9, 18], "hard": 9, "0x90000000": 9, "address": 9, "A": 9, "built": [9, 17], "spec": [9, 12], "write": 9, "hs4x": [9, 20, 22], "mcpu": [9, 12, 17, 20], "system": [9, 12, 18, 20], "cpu": [9, 12, 18, 21], "1g": [9, 12], "monitor": [9, 12], "none": [9, 12, 18, 21], "displai": [9, 12, 14, 18], "nograph": [9, 12, 18], "serial": [9, 12], "hs5x": [9, 20], "hs6x": [9, 21, 22], "same": [9, 17, 23], "input": 9, "output": 9, "interfac": 9, "nsim": [9, 12], "nsim_emt": [9, 12], "standard": [9, 10], "runtim": 9, "ouput": 9, "both": [9, 16, 20], "But": [9, 17], "possibl": 9, "implement": [9, 13], "own": 9, "hostlink": 9, "meet": [9, 17], "requir": 9, "actual": [9, 17], "have": [9, 10], "just": [9, 17], "one": 9, "_write": 9, "handl": 9, "const": 9, "char": 9, "buf": 9, "unsign": 9, "count": 9, "slightli": 9, "modifi": 9, "libqemu": 9, "newlib": [9, 17, 21], "compil": [9, 10, 13, 17, 20], "along": 9, "ccac": [9, 20], "av2h": [9, 20], "hhostlib": 9, "av3h": [9, 20], "them": 9, "arcv3": [9, 21], "right": 9, "happen": [9, 17], "absent": 9, "see": [9, 15, 17], "issu": [9, 17, 18, 22], "read": 9, "document": 9, "detail": [9, 15], "port": [9, 12], "1234": [9, 12, 14], "listet": 9, "through": 9, "socket": 9, "chardev": 9, "tmp": [9, 11], "wait": 9, "off": [9, 12], "gdb0": 9, "virt": [9, 18], "machin": 9, "vmlinux": [9, 18], "also": [9, 17, 20, 23], "loader": 9, "must": 9, "hx6x": 9, "csmith": 10, "emb": 10, "utah": 10, "edu": 10, "dynam": 10, "conform": 10, "c99": 10, "stress": 10, "analyz": 10, "other": [10, 17], "process": [10, 17], "bug": [10, 22], "everi": [10, 14, 17], "report": 10, "more": [10, 17], "than": 10, "400": 10, "previous": 10, "unknown": [10, 11], "argc": 10, "div": 10, "float": 10, "To": 10, "anoth": [10, 22], "hh": 10, "prepar": [11, 18, 22], "site": 11, "exp": 11, "separ": 11, "srcdir": 11, "compsrc": 11, "objdir": 11, "tmpdir": 11, "target_alia": 11, "target_triplet": 11, "arc_board_dir": 11, "qemu_serial_io": 11, "info": 11, "exist": [11, 15, 17], "boards_dir": 11, "lappend": 11, "baseboard": 11, "verbos": [11, 12], "target_list": 11, "runtest": 11, "content": [12, 17, 18, 23], "world": 12, "g": [12, 17, 18, 20], "o0": [12, 17, 18, 21], "nsimdrv": 12, "tcf": 12, "nsim_hom": 12, "templat": 12, "hs48_full": 12, "width": 12, "height": 12, "defin": [12, 17], "hook": 12, "quit": 12, "confirm": 12, "remot": [12, 14, 16], "load": [12, 14], "continu": 12, "log": [12, 15, 21], "overwrit": [12, 17], "regist": 12, "txt": [12, 18], "batch": 12, "caus": 13, "line": [13, 17, 18], "wa": [13, 15], "invok": 13, "record": 13, "object": 13, "being": 13, "onli": [13, 15], "exact": 13, "format": [13, 17, 20], "usual": 13, "take": 13, "form": 13, "section": 13, "ascii": 13, "text": [13, 17], "afterward": 13, "execut": 13, "o2": 13, "readelf": 13, "out": [13, 17, 21], "string": [13, 17], "dump": 13, "mtune": 13, "13": [13, 15, 21], "march": 13, "25": 13, "q": 13, "help": [13, 17], "disassembli": 14, "next": 14, "time": 14, "stop": 14, "pc": 14, "x": [14, 22], "10i": 14, "onelin": 15, "graph": 15, "decor": 15, "abbrev": 15, "v5": [15, 18], "18": 15, "shahab": 15, "bpf": 15, "jit": 15, "switch": [15, 16], "ad": 15, "origin": 15, "prior": 15, "As": 15, "suppos": 15, "try": 15, "broke": 15, "featur": 15, "known": [15, 22], "v2": 15, "rc2": 15, "session": 15, "bad": [15, 17], "current": 15, "The": 15, "alreadi": 15, "been": 15, "push": 15, "merg": 15, "localbranchnam": 15, "want": 15, "forc": 15, "even": [15, 17], "hasn": 15, "yet": 15, "remotebranchnam": 15, "synchron": 15, "flag": 15, "mean": 15, "prune": 15, "after": [15, 17, 22, 23], "fetch": 15, "longer": 15, "www": [15, 23], "freecodecamp": 15, "new": 15, "frecord": 16, "statu": 16, "branch": 16, "bisect": 16, "initi": [17, 18], "describ": [17, 18], "344": 17, "turn": 17, "differ": 17, "seem": 17, "consequ": 17, "leakag": 17, "somewher": 17, "assembl": 17, "this_name_must_be_in_debug": 17, "nop": 17, "11": [17, 23], "objdump": [17, 20], "wi": 17, "dw_at_nam": 17, "indirect": 17, "offset": 17, "0x0": 17, "macro": 17, "unlik": 17, "poor": 17, "put": 17, "preprocess": 17, "expand": 17, "gdwarf": 17, "get": [17, 18, 21, 22], "task_arc64_dwarf": 17, "extra": 17, "gap": 17, "too": [17, 20], "big": 17, "him": 17, "know": 17, "skip": 17, "debug_lin": 17, "Then": [17, 20, 23], "alwai": 17, "filenam": 17, "symbol": 17, "number": 17, "comment": [17, 18], "think": 17, "binutil": 17, "blob": 17, "ga": 17, "dwarf2dbg": 17, "l2812": 17, "overwritten": 17, "sens": 17, "mayb": 17, "stage": 17, "platform": 17, "intel": 17, "side": 17, "arm": 17, "question": 17, "why": 17, "properli": 17, "whet": 17, "valid": 17, "cannot": [17, 20], "thu": 17, "easiest": 17, "wai": 17, "prevent": 17, "thei": 17, "useless": 17, "context": 17, "undefin": 17, "behavior": 17, "need": [17, 23], "147": 18, "anonuid": 18, "anongid": 18, "u": 18, "respect": 18, "rw": 18, "all_squash": 18, "1000": 18, "no_subtree_check": 18, "insecur": 18, "rule": 18, "firewal": 18, "systemctl": 18, "rpcbind": 18, "sshd": 18, "cmd": 18, "perman": 18, "nfs3": 18, "mountd": 18, "rpc": 18, "bind": 18, "reload": 18, "exportf": 18, "ip": 18, "tuntap": 18, "tap1": 18, "addr": 18, "42": 18, "24": 18, "link": 18, "up": 18, "buildroot_build": 18, "glibc_test_defconfig": 18, "br2_toolchain_external_wchar": 18, "br2_toolchain_external_inet_rpc": 18, "br2_toolchain_buildroot_cxx": 18, "br2_target_optim": 18, "br2_toolchain_glibc_gconv_libs_copi": 18, "br2_system_dhcp": 18, "eth0": 18, "br2_rootfs_users_t": 18, "tabl": 18, "br2_package_host_linux_headers_custom_5_16": 18, "br2_package_openssh": 18, "br2_package_ntp": 18, "br2_package_ntp_ntpd": 18, "br2_package_nfs_util": 18, "br2_package_sshf": 18, "br2_package_haveg": 18, "br2_package_mak": 18, "br2_package_override_fil": 18, "buildroot_overrid": 18, "config_nfs_f": 18, "config_namespac": 18, "config_uts_n": 18, "config_ipc_n": 18, "config_user_n": 18, "config_pid_n": 18, "config_net_n": 18, "config_cgroup": 18, "config_memcg": 18, "config_ipv6": 18, "linux_override_srcdir": 18, "task_glibc_mmu_bug": 18, "glibc_override_srcdir": 18, "tag": 18, "36": 18, "cat": 18, "corp": 18, "usernam": 18, "uid": 18, "gid": 18, "password": 18, "shell": 18, "dirclean": 18, "netdev": 18, "net0": 18, "ifnam": 18, "downscript": 18, "virtio": 18, "freq_hz": 18, "50000000": 18, "ifconfig": 18, "ping": 18, "addus": 18, "ssh": 18, "kei": 18, "copi": 18, "public": 18, "keygen": 18, "rsa": 18, "id_rsa": 18, "full": 18, "realpath": [18, 21], "66": 18, "ga1dc0be03c9dd850b864bd7a9c03cf8e396eb7ca": 18, "mount": 18, "__full_path_to_glibc_source__": 18, "nfg": 18, "nolock": 18, "sshf": 18, "idmap": 18, "allow_oth": 18, "go": 18, "wrapper": 18, "cross": [18, 22], "check": 18, "4x": [20, 21], "5x": 20, "mwdt": 20, "recogn": 20, "littlearc64": 20, "00000004": 20, "c0f1": 20, "shor": 20, "0xc0f1": 20, "740c": 20, "mov_": 20, "r0": 20, "8": 20, "752c": 20, "r1": 20, "exactli": 20, "push_": 20, "blink": 20, "opcod": 20, "automak": 21, "autotool": 21, "libmpfr": 21, "libgmp": 21, "libncurs": 21, "patchutil": 21, "obtain": 21, "cg": 21, "arcv2": [21, 22], "multilib": [21, 22], "disabl": 21, "werror": 21, "cflag": 21, "g3": 21, "fvar": 21, "track": 21, "assign": 21, "cxxflag": 21, "header": 21, "mrproper": 21, "headers_instal": 21, "cross_compil": 21, "install_hdr_path": 21, "For": 21, "my": 21, "l": 21, "builder_path": 21, "headers_path": 21, "out_dir": 21, "log_fil": 21, "rm": [21, 23], "rf": 21, "touch": 21, "configure_linux": 21, "fpu": 21, "configure_baremet": 21, "clean": [21, 23], "v": 21, "tee": 21, "build_and_instal": 21, "lzip": 21, "pack": 21, "lz": 21, "gmplib": 21, "xvf": 21, "usr": 21, "destdir": 21, "sysroot": 21, "gitlab": 21, "inria": 21, "fr": 21, "autogen": 21, "product": 22, "ct": 22, "menuconfig": 22, "move": 22, "well": 22, "1809": 22, "most": 22, "interest": 22, "wide": 22, "rang": 22, "arcompact": 22, "arc600": 22, "arc700": 22, "aec": 22, "em": 22, "hs3x": 22, "dlcdn": 23, "apach": 23, "jdk": 23, "oracl": 23, "eg": 23, "java": 23, "technologi": 23, "javas": 23, "jdk11": 23, "2020": 23, "03": 23, "cdt": 23, "cc": 23, "incub": 23, "compon": 23, "arc_gnu_eclips": 23, "extract": 23, "let": 23, "later": 23, "mvn": 23, "java_hom": 23, "17": 23, "dmaven": 23, "2019": 23, "9": 23, "snapshot": 23, "zip": 23, "dropin": 23, "artifact": 23, "jar": 23, "dosgi": 23, "area": 23, "arc_gnu_ide_workspac": 23, "ini": 23}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"build": [0, 4, 5, 7, 9, 21, 22, 23], "linux": [0, 4, 5, 9, 18, 21], "imag": 0, "tabl": [0, 4, 6, 8], "content": [0, 4, 8], "us": [0, 8, 9, 13, 23], "resourc": 0, "obtain": 0, "buildroot": [0, 1, 2], "configur": [0, 1, 4, 5, 18], "arc": [0, 21], "h": 0, "3x": 0, "4x": 0, "glibc": [0, 18], "5x": 0, "uclibc": 0, "6x": 0, "predefin": 0, "addit": 0, "option": [0, 13], "environ": [3, 21], "bootstrap": 4, "ubuntu": [4, 5, 7, 18], "22": [4, 18], "04": [4, 18], "fedora": [4, 5, 7, 18], "37": [4, 18], "profil": 4, "bashrc": 4, "setup": 4, "git": [4, 15], "instal": [4, 5, 7], "rust": 4, "elfutil": 4, "pahol": 4, "bpftool": 4, "wsl": 5, "vpnkit": 5, "kernel": [5, 9, 18], "6": 5, "1": 5, "file": [5, 17], "shrink": 5, "virtual": 5, "disk": 5, "": [5, 6], "space": 5, "yurii": 6, "kolerov": 6, "document": 6, "indic": 6, "qemu": [7, 8, 20], "packag": 7, "verif": [8, 10, 12], "run": [9, 12], "binari": 9, "bare": 9, "metal": 9, "target": [9, 13], "gcc": [9, 13], "metawar": 9, "develop": 9, "toolkit": 9, "gdb": [9, 12, 14], "server": [9, 12], "gener": 10, "random": 10, "program": 10, "dejagnu": 11, "test": 11, "compar": [12, 15], "state": 12, "compil": 12, "an": 12, "exampl": 12, "client": 12, "frecord": 13, "switch": 13, "show": 13, "statu": 13, "branch": 15, "creat": 15, "from": [15, 21, 22], "remot": 15, "bisect": 15, "code": 15, "how": 15, "delet": 15, "both": 15, "local": 15, "snippet": 16, "direct": 17, "doe": 17, "work": 17, "intend": 17, "The": [17, 18], "problem": [17, 18], "reproduc": [17, 18], "solut": 17, "testsuit": 18, "fail": 18, "vanilla": 18, "nf": 18, "wsl2": 18, "tap": 18, "interfac": 18, "task": 19, "some": 20, "stack": 20, "oper": 20, "ar": 20, "present": 20, "gnu": [21, 24], "toolchain": [21, 24], "prepar": 21, "baremet": 21, "script": 21, "gmp": 21, "mpfr": 21, "binutil": 21, "crosstool": 22, "ng": 22, "eclips": 23, "plugin": 23, "maven": 23, "debug": 23, "pdt": 23}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Build Linux images": [[0, "build-linux-images"]], "Table of Contents": [[0, "table-of-contents"], [4, "table-of-contents"], [8, null]], "Useful resources": [[0, "useful-resources"]], "Obtaining Buildroot": [[0, "obtaining-buildroot"]], "Build images": [[0, "build-images"]], "Configuring Buildroot": [[0, "configuring-buildroot"]], "ARC HS 3x/4x (glibc)": [[0, "arc-hs-3x-4x-glibc"]], "ARC HS 5x (uClibc)": [[0, "arc-hs-5x-uclibc"]], "ARC HS 6x (glibc)": [[0, "arc-hs-6x-glibc"]], "Predefined configurations": [[0, "predefined-configurations"]], "Additional configuration options": [[0, "additional-configuration-options"]], "Buildroot configuration": [[1, "buildroot-configuration"]], "Buildroot": [[2, "buildroot"]], "Environment": [[3, "environment"]], "Linux": [[4, "linux"]], "Bootstrap Ubuntu 22.04": [[4, "bootstrap-ubuntu-22-04"]], "Bootstrap Fedora 37": [[4, "bootstrap-fedora-37"]], "Configure .profile": [[4, "configure-profile"]], "Configure .bashrc": [[4, "configure-bashrc"]], "Setup Git": [[4, "setup-git"]], "Install Rust": [[4, "install-rust"]], "Build and Install elfutils": [[4, "build-and-install-elfutils"]], "Build and Install pahole": [[4, "build-and-install-pahole"]], "Build and Install bpftool": [[4, "build-and-install-bpftool"]], "WSL": [[5, "wsl"]], "Install Ubuntu": [[5, "install-ubuntu"]], "Install Fedora": [[5, "install-fedora"]], "Install wsl-vpnkit": [[5, "install-wsl-vpnkit"]], "Configure WSL": [[5, "configure-wsl"]], "Build and Install the Linux Kernel 6.1": [[5, "build-and-install-the-linux-kernel-6-1"]], "Configuration Files": [[5, "configuration-files"]], "Shrink virtual disk\u2019s space": [[5, "shrink-virtual-disk-s-space"]], "Yuriy Kolerov\u2019s documentation": [[6, "yuriy-kolerov-s-documentation"]], "Indices and tables": [[6, "indices-and-tables"]], "Building QEMU": [[7, "building-qemu"]], "Install packages for Ubuntu": [[7, "install-packages-for-ubuntu"]], "Install packages for Fedora": [[7, "install-packages-for-fedora"]], "Build and install QEMU": [[7, "build-and-install-qemu"]], "QEMU": [[8, "qemu"]], "Verification of QEMU": [[8, "verification-of-qemu"]], "Using QEMU": [[8, "using-qemu"]], "Building and running binaries": [[9, "building-and-running-binaries"]], "Build binaries for bare metal targets using GCC": [[9, "build-binaries-for-bare-metal-targets-using-gcc"]], "Build binaries for bare metal targets using MetaWare Development Toolkit": [[9, "build-binaries-for-bare-metal-targets-using-metaware-development-toolkit"]], "Run a GDB server": [[9, "run-a-gdb-server"], [12, "run-a-gdb-server"]], "Running the Linux kernel": [[9, "running-the-linux-kernel"]], "Verification by generating random programs": [[10, "verification-by-generating-random-programs"]], "DejaGnu tests": [[11, "dejagnu-tests"]], "Verification by comparing states": [[12, "verification-by-comparing-states"]], "Compile an example": [[12, "compile-an-example"]], "Run a GDB client": [[12, "run-a-gdb-client"]], "GCC": [[13, "gcc"]], "Using -frecord-gcc-switches": [[13, "using-frecord-gcc-switches"]], "Show status of target options": [[13, "show-status-of-target-options"]], "GDB": [[14, "gdb"]], "Git": [[15, "git"]], "Compare Branches": [[15, "compare-branches"]], "Create a Branch from Remote": [[15, "create-a-branch-from-remote"]], "Bisect Code": [[15, "bisect-code"]], "How to Delete a Git Branch Both Locally and Remotely": [[15, "how-to-delete-a-git-branch-both-locally-and-remotely"]], "Snippets": [[16, "snippets"]], "\ud83d\udfe2 .file directive does not work as intended": [[17, "file-directive-does-not-work-as-intended"]], "The Problem": [[17, "the-problem"], [18, "the-problem"]], "Reproduce": [[17, "reproduce"], [18, "reproduce"]], "Solution": [[17, "solution"]], "\ud83d\udfe1 glibc testsuite fails with vanilla Linux kernels": [[18, "glibc-testsuite-fails-with-vanilla-linux-kernels"]], "Configure NFS (Fedora 37)": [[18, "configure-nfs-fedora-37"]], "Configure NFS (WSL2 with Ubuntu 22.04)": [[18, "configure-nfs-wsl2-with-ubuntu-22-04"]], "Configure TAP interface": [[18, "configure-tap-interface"]], "Tasks": [[19, "tasks"]], "\ud83d\udfe1 Some stack operations are not presented in QEMU": [[20, "some-stack-operations-are-not-presented-in-qemu"]], "Building from arc-gnu-toolchain": [[21, "building-from-arc-gnu-toolchain"]], "Prepare environment": [[21, "prepare-environment"]], "Build baremetal toolchain": [[21, "build-baremetal-toolchain"]], "Build Linux toolchain": [[21, "build-linux-toolchain"]], "Scripts": [[21, "scripts"]], "Build GMP and MPFR for Binutils": [[21, "build-gmp-and-mpfr-for-binutils"]], "Building from crosstool-ng": [[22, "building-from-crosstool-ng"]], "Eclipse Plugin": [[23, "eclipse-plugin"]], "Build using Maven": [[23, "build-using-maven"]], "Build and Debug Using Eclipse PDT": [[23, "build-and-debug-using-eclipse-pdt"]], "GNU Toolchain": [[24, "gnu-toolchain"]]}, "indexentries": {}})