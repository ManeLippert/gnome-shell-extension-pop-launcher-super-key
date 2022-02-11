# Pop!_OS Launcher on Super-Key

![alt text](pop-launcher-super-key.png)

After disabling the Pop-Cosmic Extension the Pop-Launcher does not open when hitting ```Super``` but when hitting ```Super+/```. So I forked the Pop-Cosmic Extension and removed everything that does not control the Pop-Launcher to get back the ```Super``` Shortcut for the Pop-Launcher back. 

## Instruction

Hit ```Super``` to launch Pop-Launcher

## Requirements
* [GNOME Shell](https://gitlab.gnome.org/GNOME/gnome-shell) == 3.38.*
* [Pop_Shell](https://github.com/pop-os/shell) >= 1.1.0


## Installation 

* ### From [Gnome Extensions](https://extensions.gnome.org/extension/4797/pop-launcher-super-key/)

* ### From Source

    ```
    git clone https://github.com/ManeLippert/pop-launcher-super-key
    cd pop-launcher-super-key
    make && make install
    killall -3 gnome-shell
    ```
* ### From Release
    Download release-file, unzip it and move it to ```~/.local/share/gnome-shell/extensions/```


    After that reboot your PC or hit **'Alt+Fn+F2'** and type **'r'** or type in the terminal ```killall -3 gnome-shell```

## Removal

```
rm -r ~/.local/share/gnome-shell/extensions/pop-launcher-super-key@ManeLippert
```

## License
COSMIC is available under the terms of the GNU General Public License Version 3. For full license terms, see [LICENSE](./LICENSE).
