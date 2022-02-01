const ExtensionUtils = imports.misc.extensionUtils;
const extension = ExtensionUtils.getCurrentExtension();
const Main = imports.ui.main;
const OverviewControls = imports.ui.overviewControls;

function with_pop_shell(callback) {
    let pop_shell = Main.extensionManager.lookup("pop-shell@system76.com");
    if (pop_shell && pop_shell.stateObj) {
        let ext = pop_shell.stateObj.ext;
        if (ext) {
            return callback(ext);
        }
    }
}

var OVERVIEW_LAUNCHER = 2;

function overview_visible(kind) {
    if (kind == OVERVIEW_LAUNCHER) {
        if (with_pop_shell((ext) => {
            return ext.window_search.dialog.visible;
        }) === true) {
            return true;
        }
    } else {
        if (Main.overview.visibleTarget) {
            return true;
        }
    }
    return false;
}

function overview_show(kind) {
    if (kind == OVERVIEW_LAUNCHER) {
        Main.overview.hide();
        with_pop_shell((ext) => {
            ext.tiler.exit(ext);
            ext.window_search.load_desktop_files();
            ext.window_search.open(ext);
        });
    } else {
        Main.overview.show();
    }
}

function overview_hide(kind) {
    if (kind == OVERVIEW_LAUNCHER) {
        with_pop_shell((ext) => {
            ext.exit_modes();
        });
    } else {
        Main.overview.hide();
    }
}

function overview_toggle(kind) {
    if (Main.overview.animationInProgress) {
        // prevent accidental re-show
    } else if (overview_visible(kind)) {
        overview_hide(kind);
    } else {
        overview_show(kind);
    }
}
