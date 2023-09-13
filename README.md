# Pop!_OS Launcher on Super-Key

Since Pop!_OS moves to its own desktop enviroment (COSMIC DE) and I left linux behind me this extension will not get continued. The last update supports GNOME-Shell up to **Version 44** but needs some testing, report back to me when some errors occur.

## Support for Gnome 45

For Gnome 45 extensions has to rewritten following this [guide](https://gjs.guide/extensions/upgrading/gnome-shell-45.html#esm). As I stated before I do not use Linux anymore so I am not able to port the extension nor to test it. When someone is willing to port and test the extension get in touch in with me via social media, [issue](https://github.com/ManeLippert/gnome-shell-extension-pop-launcher-super-key/issues/3) or a [pull request](https://github.com/ManeLippert/gnome-shell-extension-pop-launcher-super-key/pulls).

![alt text](pop-launcher-super-key.png)

Fork of [Pop COSMIC](https://github.com/pop-os/cosmic) that binds the Pop Launcher to the ```Super```-Key (Without ```Super+/```).

## Requirements
* [GNOME Shell](https://gitlab.gnome.org/GNOME/gnome-shell) == 3.38.*
* [Pop_Shell](https://github.com/pop-os/shell) >= 1.1.0
* [Pop-Launcher](https://github.com/pop-os/launcher)


## Installation 

[<img src="https://github.com/andyholmes/gnome-shell-extensions-badge/raw/master/get-it-on-ego.svg" width=120px>](https://extensions.gnome.org/extension/4797/pop-launcher-super-key/)

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
