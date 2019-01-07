/**
 * @file   mofron-comp-menuitem/index.js
 * @brief  menu item component for mofron
 * @author simpart
 */
const mf = require('mofron');

mf.comp.MenuItem = class extends mf.Component {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('MenuItem');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set/unset select style
     *
     * @param (boolean) select flag
     */
    select (flg) {
        try {
            let style_func = () => {
                try {
                    let style = (true === flg) ? this.selectStyle() : this.unSelectStyle();
                    for (let sidx in style) {
                        this.style(style[sidx]);
                    }    
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            
            /* execute effect of this component */
            mf.func.execEffect(this, flg, style_func);
            
            let chd = this.getChild(true);
            for (let cidx in chd) {
                /* execute effect of child component */
                mf.func.execEffect(chd[cidx], flg);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    selectStyle (prm) {
        try { return this.arrayMember('selectStyle', 'object', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    unSelectStyle (prm) {
        try { return this.arrayMember('unSelectStyle', 'object', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.MenuItem;
/* end of file */
