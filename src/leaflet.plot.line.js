/*
 * @Author: funcgis 
 * @Date: 2018-07-06 09:24:01 
 * @Last Modified by: funcgis
 * @Last Modified time: 2018-07-06 09:55:18
 * Plot Any Line On Map
 */

 L.Plot.Line = L.Polyline.extend({
    // Plot.Text options
	options: {

        // @option color: type = 'Line'折线/'ArcLine'弧线/'CurveLine'曲线/'FreeLine'自由线/
        type: 'Line',
    }
 });