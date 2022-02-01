# Pop!_OS Launcher on Super-Key

After disabling the Pop-Cosmic Extension the Pop-Launcher does not open when hitting the Super-Key. So I forked the Pop-Cosmic Extension and removed everything that does not control the Pop-Launcher. 

## Instruction

Hit 'Super' to launch Pop-Launcher

## Requirements
* [GNOME Shell](https://gitlab.gnome.org/GNOME/gnome-shell) == 3.38.*
* [Pop_Shell](https://github.com/pop-os/shell) >= 1.1.0


## Installation 
### From Source

```
git clone https://github.com/ManeLippert/pop-launcher-super-key
cd pop-launcher-super-key
make && make install
```
### From Release
Download release-file, unzip it and move it to ```~/.local/share/gnome-shell/extensions/```


After that reboot your PC or hit **'Alt+Fn+F2'** and type **'r'** or type in the terminal ```killall -3 gnome-shell```

##### Note
Use of `sudo` is not required nor recommended.

## Removal

To remove COSMIC, remove each component listed above, then:

```
rm -r ~/.local/share/gnome-shell/extensions/pop-launcher-super-key@ManeLippert
```

## TODO
* Test compatibility overall
* Test compatibility with Fedora pop-shell (Wait until pop-launcher gets released on Fedora35?)

## License
COSMIC is available under the terms of the GNU General Public License Version 3. For full license terms, see [LICENSE](./LICENSE).
