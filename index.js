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
            let eff = this.effect();
            for (let eidx in eff) {
                eff[eidx].execute(flg);
            }
            let chd = this.getChild(true);
            for (let cidx in chd) {
                eff = chd[cidx].effect();
                for (let ceidx in eff) {
                    eff[ceidx].execute(flg);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.MenuItem;
/* end of file */
