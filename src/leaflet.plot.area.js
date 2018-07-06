/*
 * @Author: funcgis 
 * @Date: 2018-07-06 09:40:52 
 * @Last Modified by: funcgis
 * @Last Modified time: 2018-07-06 09:54:51
 */

L.Plot.Area = L.Polygon.extend({
    // Plot.Text options
	options: {

        // @option color: type = 'Polygon'多边形/Rectangle'矩形/'Circle'圆/'Ellipse'椭圆形/'ArcArea'弓形/'FanArea'扇形/'FreeArea'自由面/'CurveArea'曲线面/'RallyingArea'聚集地/
        type: 'Polygon',
    }
 });