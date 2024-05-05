var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MBMCWealthIndex_1 = new ol.format.GeoJSON();
var features_MBMCWealthIndex_1 = format_MBMCWealthIndex_1.readFeatures(json_MBMCWealthIndex_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCWealthIndex_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCWealthIndex_1.addFeatures(features_MBMCWealthIndex_1);
var lyr_MBMCWealthIndex_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCWealthIndex_1, 
                style: style_MBMCWealthIndex_1,
                popuplayertitle: "MBMC Wealth Index",
                interactive: true,
    title: 'MBMC Wealth Index<br />\
    <img src="styles/legend/MBMCWealthIndex_1_0.png" /> -0.29 - -0.16<br />\
    <img src="styles/legend/MBMCWealthIndex_1_1.png" /> -0.16 - -0.03<br />\
    <img src="styles/legend/MBMCWealthIndex_1_2.png" /> -0.03 - 0.11<br />\
    <img src="styles/legend/MBMCWealthIndex_1_3.png" /> 0.11 - 0.24<br />\
    <img src="styles/legend/MBMCWealthIndex_1_4.png" /> 0.24 - 0.37<br />\
    <img src="styles/legend/MBMCWealthIndex_1_5.png" /> 0.37 - 0.51<br />\
    <img src="styles/legend/MBMCWealthIndex_1_6.png" /> 0.51 - 0.64<br />\
    <img src="styles/legend/MBMCWealthIndex_1_7.png" /> 0.64 - 0.77<br />\
    <img src="styles/legend/MBMCWealthIndex_1_8.png" /> 0.77 - 0.91<br />\
    <img src="styles/legend/MBMCWealthIndex_1_9.png" /> 0.91 - 1.04<br />\
    <img src="styles/legend/MBMCWealthIndex_1_10.png" /> 1.04 - 1.18<br />\
    <img src="styles/legend/MBMCWealthIndex_1_11.png" /> 1.18 - 1.31<br />\
    <img src="styles/legend/MBMCWealthIndex_1_12.png" /> 1.31 - 1.44<br />\
    <img src="styles/legend/MBMCWealthIndex_1_13.png" /> 1.44 - 1.58<br />\
    <img src="styles/legend/MBMCWealthIndex_1_14.png" /> 1.58 - 1.71<br />'
        });
var format_AreaUncovered_2 = new ol.format.GeoJSON();
var features_AreaUncovered_2 = format_AreaUncovered_2.readFeatures(json_AreaUncovered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaUncovered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaUncovered_2.addFeatures(features_AreaUncovered_2);
var lyr_AreaUncovered_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaUncovered_2, 
                style: style_AreaUncovered_2,
                popuplayertitle: "Area Uncovered",
                interactive: true,
                title: '<img src="styles/legend/AreaUncovered_2.png" /> Area Uncovered'
            });
var format_PopulationMBMC_3 = new ol.format.GeoJSON();
var features_PopulationMBMC_3 = format_PopulationMBMC_3.readFeatures(json_PopulationMBMC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationMBMC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationMBMC_3.addFeatures(features_PopulationMBMC_3);
var lyr_PopulationMBMC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopulationMBMC_3, 
                style: style_PopulationMBMC_3,
                popuplayertitle: "Population MBMC",
                interactive: true,
    title: 'Population MBMC<br />\
    <img src="styles/legend/PopulationMBMC_3_0.png" /> 1 - 2069<br />\
    <img src="styles/legend/PopulationMBMC_3_1.png" /> 2069 - 4137<br />\
    <img src="styles/legend/PopulationMBMC_3_2.png" /> 4137 - 6205<br />\
    <img src="styles/legend/PopulationMBMC_3_3.png" /> 6205 - 8274<br />\
    <img src="styles/legend/PopulationMBMC_3_4.png" /> 8274 - 10342<br />\
    <img src="styles/legend/PopulationMBMC_3_5.png" /> 10342 - 12410<br />\
    <img src="styles/legend/PopulationMBMC_3_6.png" /> 12410 - 14478<br />\
    <img src="styles/legend/PopulationMBMC_3_7.png" /> 14478 - 16546<br />\
    <img src="styles/legend/PopulationMBMC_3_8.png" /> 16546 - 18614<br />\
    <img src="styles/legend/PopulationMBMC_3_9.png" /> 18614 - 20682<br />\
    <img src="styles/legend/PopulationMBMC_3_10.png" /> 20682 - 22750<br />\
    <img src="styles/legend/PopulationMBMC_3_11.png" /> 22750 - 24819<br />\
    <img src="styles/legend/PopulationMBMC_3_12.png" /> 24819 - 26887<br />\
    <img src="styles/legend/PopulationMBMC_3_13.png" /> 26887 - 28955<br />\
    <img src="styles/legend/PopulationMBMC_3_14.png" /> 28955 - 31023<br />'
        });
var format_StopPopWithinMBMC_4 = new ol.format.GeoJSON();
var features_StopPopWithinMBMC_4 = format_StopPopWithinMBMC_4.readFeatures(json_StopPopWithinMBMC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopPopWithinMBMC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopPopWithinMBMC_4.addFeatures(features_StopPopWithinMBMC_4);
var lyr_StopPopWithinMBMC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopPopWithinMBMC_4, 
                style: style_StopPopWithinMBMC_4,
                popuplayertitle: "Stop Pop Within MBMC",
                interactive: true,
                title: '<img src="styles/legend/StopPopWithinMBMC_4.png" /> Stop Pop Within MBMC'
            });
var format_RailwayStn_5 = new ol.format.GeoJSON();
var features_RailwayStn_5 = format_RailwayStn_5.readFeatures(json_RailwayStn_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailwayStn_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailwayStn_5.addFeatures(features_RailwayStn_5);
var lyr_RailwayStn_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RailwayStn_5, 
                style: style_RailwayStn_5,
                popuplayertitle: "Railway Stn",
                interactive: true,
                title: '<img src="styles/legend/RailwayStn_5.png" /> Railway Stn'
            });
var format_GovtOffice_6 = new ol.format.GeoJSON();
var features_GovtOffice_6 = format_GovtOffice_6.readFeatures(json_GovtOffice_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GovtOffice_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GovtOffice_6.addFeatures(features_GovtOffice_6);
var lyr_GovtOffice_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GovtOffice_6, 
                style: style_GovtOffice_6,
                popuplayertitle: "Govt Office",
                interactive: true,
                title: '<img src="styles/legend/GovtOffice_6.png" /> Govt Office'
            });
var format_Education_7 = new ol.format.GeoJSON();
var features_Education_7 = format_Education_7.readFeatures(json_Education_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_7.addFeatures(features_Education_7);
var lyr_Education_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Education_7, 
                style: style_Education_7,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_7.png" /> Education'
            });
var format_PrivateOffices_8 = new ol.format.GeoJSON();
var features_PrivateOffices_8 = format_PrivateOffices_8.readFeatures(json_PrivateOffices_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateOffices_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateOffices_8.addFeatures(features_PrivateOffices_8);
var lyr_PrivateOffices_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrivateOffices_8, 
                style: style_PrivateOffices_8,
                popuplayertitle: "Private Offices",
                interactive: true,
                title: '<img src="styles/legend/PrivateOffices_8.png" /> Private Offices'
            });
var format_PSU_9 = new ol.format.GeoJSON();
var features_PSU_9 = format_PSU_9.readFeatures(json_PSU_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSU_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSU_9.addFeatures(features_PSU_9);
var lyr_PSU_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PSU_9, 
                style: style_PSU_9,
                popuplayertitle: "PSU",
                interactive: true,
                title: '<img src="styles/legend/PSU_9.png" /> PSU'
            });
var format_Hospitals_10 = new ol.format.GeoJSON();
var features_Hospitals_10 = format_Hospitals_10.readFeatures(json_Hospitals_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitals_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitals_10.addFeatures(features_Hospitals_10);
var lyr_Hospitals_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitals_10, 
                style: style_Hospitals_10,
                popuplayertitle: "Hospitals",
                interactive: true,
                title: '<img src="styles/legend/Hospitals_10.png" /> Hospitals'
            });
var format_Signals_11 = new ol.format.GeoJSON();
var features_Signals_11 = format_Signals_11.readFeatures(json_Signals_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signals_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signals_11.addFeatures(features_Signals_11);
var lyr_Signals_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signals_11, 
                style: style_Signals_11,
                popuplayertitle: "Signals",
                interactive: true,
                title: '<img src="styles/legend/Signals_11.png" /> Signals'
            });
var format_Temples_12 = new ol.format.GeoJSON();
var features_Temples_12 = format_Temples_12.readFeatures(json_Temples_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temples_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temples_12.addFeatures(features_Temples_12);
var lyr_Temples_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temples_12, 
                style: style_Temples_12,
                popuplayertitle: "Temples",
                interactive: true,
                title: '<img src="styles/legend/Temples_12.png" /> Temples'
            });
var format_StopsInsideMBMCcsv_13 = new ol.format.GeoJSON();
var features_StopsInsideMBMCcsv_13 = format_StopsInsideMBMCcsv_13.readFeatures(json_StopsInsideMBMCcsv_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsInsideMBMCcsv_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsInsideMBMCcsv_13.addFeatures(features_StopsInsideMBMCcsv_13);
var lyr_StopsInsideMBMCcsv_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsInsideMBMCcsv_13, 
                style: style_StopsInsideMBMCcsv_13,
                popuplayertitle: "Stops Inside MBMC.csv",
                interactive: true,
                title: 'Stops Inside MBMC.csv'
            });
var format_MBMCStopsMapped_14 = new ol.format.GeoJSON();
var features_MBMCStopsMapped_14 = format_MBMCStopsMapped_14.readFeatures(json_MBMCStopsMapped_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStopsMapped_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStopsMapped_14.addFeatures(features_MBMCStopsMapped_14);
var lyr_MBMCStopsMapped_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCStopsMapped_14, 
                style: style_MBMCStopsMapped_14,
                popuplayertitle: "MBMC Stops Mapped",
                interactive: true,
    title: 'MBMC Stops Mapped<br />\
    <img src="styles/legend/MBMCStopsMapped_14_0.png" /> Route 1<br />\
    <img src="styles/legend/MBMCStopsMapped_14_1.png" /> Route 10<br />\
    <img src="styles/legend/MBMCStopsMapped_14_2.png" /> Route 10 AC<br />\
    <img src="styles/legend/MBMCStopsMapped_14_3.png" /> Route 12<br />\
    <img src="styles/legend/MBMCStopsMapped_14_4.png" /> Route 14<br />\
    <img src="styles/legend/MBMCStopsMapped_14_5.png" /> Route 15<br />\
    <img src="styles/legend/MBMCStopsMapped_14_6.png" /> Route 16<br />\
    <img src="styles/legend/MBMCStopsMapped_14_7.png" /> Route 17<br />\
    <img src="styles/legend/MBMCStopsMapped_14_8.png" /> Route 18<br />\
    <img src="styles/legend/MBMCStopsMapped_14_9.png" /> Route 19<br />\
    <img src="styles/legend/MBMCStopsMapped_14_10.png" /> Route 2<br />\
    <img src="styles/legend/MBMCStopsMapped_14_11.png" /> Route 20<br />\
    <img src="styles/legend/MBMCStopsMapped_14_12.png" /> Route 21<br />\
    <img src="styles/legend/MBMCStopsMapped_14_13.png" /> Route 22<br />\
    <img src="styles/legend/MBMCStopsMapped_14_14.png" /> Route 23<br />\
    <img src="styles/legend/MBMCStopsMapped_14_15.png" /> Route 24<br />\
    <img src="styles/legend/MBMCStopsMapped_14_16.png" /> Route 25<br />\
    <img src="styles/legend/MBMCStopsMapped_14_17.png" /> Route 28<br />\
    <img src="styles/legend/MBMCStopsMapped_14_18.png" /> Route 29<br />\
    <img src="styles/legend/MBMCStopsMapped_14_19.png" /> Route 29 AC<br />\
    <img src="styles/legend/MBMCStopsMapped_14_20.png" /> Route 4<br />\
    <img src="styles/legend/MBMCStopsMapped_14_21.png" /> Route 5<br />\
    <img src="styles/legend/MBMCStopsMapped_14_22.png" /> Route 6<br />\
    <img src="styles/legend/MBMCStopsMapped_14_23.png" /> <br />'
        });
var format_MBMCRoutesStats_15 = new ol.format.GeoJSON();
var features_MBMCRoutesStats_15 = format_MBMCRoutesStats_15.readFeatures(json_MBMCRoutesStats_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCRoutesStats_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCRoutesStats_15.addFeatures(features_MBMCRoutesStats_15);
var lyr_MBMCRoutesStats_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCRoutesStats_15, 
                style: style_MBMCRoutesStats_15,
                popuplayertitle: "MBMC Routes Stats",
                interactive: true,
    title: 'MBMC Routes Stats<br />\
    <img src="styles/legend/MBMCRoutesStats_15_0.png" /> Route 1<br />\
    <img src="styles/legend/MBMCRoutesStats_15_1.png" /> Route 10<br />\
    <img src="styles/legend/MBMCRoutesStats_15_2.png" /> Route 10 AC<br />\
    <img src="styles/legend/MBMCRoutesStats_15_3.png" /> Route 12<br />\
    <img src="styles/legend/MBMCRoutesStats_15_4.png" /> Route 14<br />\
    <img src="styles/legend/MBMCRoutesStats_15_5.png" /> Route 15<br />\
    <img src="styles/legend/MBMCRoutesStats_15_6.png" /> Route 16<br />\
    <img src="styles/legend/MBMCRoutesStats_15_7.png" /> Route 17<br />\
    <img src="styles/legend/MBMCRoutesStats_15_8.png" /> Route 18<br />\
    <img src="styles/legend/MBMCRoutesStats_15_9.png" /> Route 19<br />\
    <img src="styles/legend/MBMCRoutesStats_15_10.png" /> Route 2<br />\
    <img src="styles/legend/MBMCRoutesStats_15_11.png" /> Route 20<br />\
    <img src="styles/legend/MBMCRoutesStats_15_12.png" /> Route 21<br />\
    <img src="styles/legend/MBMCRoutesStats_15_13.png" /> Route 22<br />\
    <img src="styles/legend/MBMCRoutesStats_15_14.png" /> Route 23<br />\
    <img src="styles/legend/MBMCRoutesStats_15_15.png" /> Route 24<br />\
    <img src="styles/legend/MBMCRoutesStats_15_16.png" /> Route 25<br />\
    <img src="styles/legend/MBMCRoutesStats_15_17.png" /> Route 28<br />\
    <img src="styles/legend/MBMCRoutesStats_15_18.png" /> Route 29<br />\
    <img src="styles/legend/MBMCRoutesStats_15_19.png" /> Route 29 AC<br />\
    <img src="styles/legend/MBMCRoutesStats_15_20.png" /> Route 4<br />\
    <img src="styles/legend/MBMCRoutesStats_15_21.png" /> Route 5<br />\
    <img src="styles/legend/MBMCRoutesStats_15_22.png" /> Route 6<br />\
    <img src="styles/legend/MBMCRoutesStats_15_23.png" /> <br />'
        });
var format_MBMCStops_16 = new ol.format.GeoJSON();
var features_MBMCStops_16 = format_MBMCStops_16.readFeatures(json_MBMCStops_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStops_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStops_16.addFeatures(features_MBMCStops_16);
var lyr_MBMCStops_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCStops_16, 
                style: style_MBMCStops_16,
                popuplayertitle: "MBMC Stops",
                interactive: true,
                title: '<img src="styles/legend/MBMCStops_16.png" /> MBMC Stops'
            });
var format_StopsinsideMBMC_17 = new ol.format.GeoJSON();
var features_StopsinsideMBMC_17 = format_StopsinsideMBMC_17.readFeatures(json_StopsinsideMBMC_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsinsideMBMC_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsinsideMBMC_17.addFeatures(features_StopsinsideMBMC_17);
var lyr_StopsinsideMBMC_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsinsideMBMC_17, 
                style: style_StopsinsideMBMC_17,
                popuplayertitle: "Stops inside MBMC",
                interactive: true,
                title: '<img src="styles/legend/StopsinsideMBMC_17.png" /> Stops inside MBMC'
            });
var format_MBMCTerminals_18 = new ol.format.GeoJSON();
var features_MBMCTerminals_18 = format_MBMCTerminals_18.readFeatures(json_MBMCTerminals_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCTerminals_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCTerminals_18.addFeatures(features_MBMCTerminals_18);
var lyr_MBMCTerminals_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCTerminals_18, 
                style: style_MBMCTerminals_18,
                popuplayertitle: "MBMC Terminals",
                interactive: true,
    title: 'MBMC Terminals<br />\
    <img src="styles/legend/MBMCTerminals_18_0.png" /> Adani Power House<br />\
    <img src="styles/legend/MBMCTerminals_18_1.png" /> Bhayandar Station East<br />\
    <img src="styles/legend/MBMCTerminals_18_2.png" /> Bhayandar Station West<br />\
    <img src="styles/legend/MBMCTerminals_18_3.png" /> Borivali National Park<br />\
    <img src="styles/legend/MBMCTerminals_18_4.png" /> Borivali Railway Station<br />\
    <img src="styles/legend/MBMCTerminals_18_5.png" /> Chimaji Appa Chouk<br />\
    <img src="styles/legend/MBMCTerminals_18_6.png" /> GCC School<br />\
    <img src="styles/legend/MBMCTerminals_18_7.png" /> GHARTAN PADA<br />\
    <img src="styles/legend/MBMCTerminals_18_8.png" /> Ghodbunder Depot<br />\
    <img src="styles/legend/MBMCTerminals_18_9.png" /> Golden Nest<br />\
    <img src="styles/legend/MBMCTerminals_18_10.png" /> Jain Mandir 2<br />\
    <img src="styles/legend/MBMCTerminals_18_11.png" /> Jogeshwari station West<br />\
    <img src="styles/legend/MBMCTerminals_18_12.png" /> JP Infra<br />\
    <img src="styles/legend/MBMCTerminals_18_13.png" /> Kashimira<br />\
    <img src="styles/legend/MBMCTerminals_18_14.png" /> KD Empire<br />\
    <img src="styles/legend/MBMCTerminals_18_15.png" /> Manori Tar<br />\
    <img src="styles/legend/MBMCTerminals_18_16.png" /> Mira Road Station<br />\
    <img src="styles/legend/MBMCTerminals_18_17.png" /> Modern Company<br />\
    <img src="styles/legend/MBMCTerminals_18_18.png" /> Morva Bhat<br />\
    <img src="styles/legend/MBMCTerminals_18_19.png" /> MTNL Office<br />\
    <img src="styles/legend/MBMCTerminals_18_20.png" /> Nagar Bhavan Mandi talav<br />\
    <img src="styles/legend/MBMCTerminals_18_21.png" /> Pagoda<br />\
    <img src="styles/legend/MBMCTerminals_18_22.png" /> POONAM SAGAR<br />\
    <img src="styles/legend/MBMCTerminals_18_23.png" /> Prakshal<br />\
    <img src="styles/legend/MBMCTerminals_18_24.png" /> RAM NAGAR<br />\
    <img src="styles/legend/MBMCTerminals_18_25.png" /> RASHMI COMPLEX<br />\
    <img src="styles/legend/MBMCTerminals_18_26.png" /> S.K STONE POLICE STATION<br />\
    <img src="styles/legend/MBMCTerminals_18_27.png" /> Salasar Nagar<br />\
    <img src="styles/legend/MBMCTerminals_18_28.png" /> Shantiwan<br />\
    <img src="styles/legend/MBMCTerminals_18_29.png" /> Silver Park<br />\
    <img src="styles/legend/MBMCTerminals_18_30.png" /> Swa Praful Patil Chowk Indralok Naka<br />\
    <img src="styles/legend/MBMCTerminals_18_31.png" /> Thane Station East Kopri<br />\
    <img src="styles/legend/MBMCTerminals_18_32.png" /> Tiwari College<br />\
    <img src="styles/legend/MBMCTerminals_18_33.png" /> Tunga Hospital<br />\
    <img src="styles/legend/MBMCTerminals_18_34.png" /> Uttan Naka<br />\
    <img src="styles/legend/MBMCTerminals_18_35.png" /> Vinay Nagar<br />\
    <img src="styles/legend/MBMCTerminals_18_36.png" /> Western Park E.<br />\
    <img src="styles/legend/MBMCTerminals_18_37.png" /> <br />'
        });
var format_Rt24StopPop10Min_19 = new ol.format.GeoJSON();
var features_Rt24StopPop10Min_19 = format_Rt24StopPop10Min_19.readFeatures(json_Rt24StopPop10Min_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt24StopPop10Min_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt24StopPop10Min_19.addFeatures(features_Rt24StopPop10Min_19);
var lyr_Rt24StopPop10Min_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt24StopPop10Min_19, 
                style: style_Rt24StopPop10Min_19,
                popuplayertitle: "Rt 24 Stop Pop 10 Min",
                interactive: true,
    title: 'Rt 24 Stop Pop 10 Min<br />\
    <img src="styles/legend/Rt24StopPop10Min_19_0.png" /> 10 min<br />'
        });
var format_Rt24StopPop5Min_20 = new ol.format.GeoJSON();
var features_Rt24StopPop5Min_20 = format_Rt24StopPop5Min_20.readFeatures(json_Rt24StopPop5Min_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt24StopPop5Min_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt24StopPop5Min_20.addFeatures(features_Rt24StopPop5Min_20);
var lyr_Rt24StopPop5Min_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt24StopPop5Min_20, 
                style: style_Rt24StopPop5Min_20,
                popuplayertitle: "Rt 24 Stop Pop 5 Min",
                interactive: true,
    title: 'Rt 24 Stop Pop 5 Min<br />\
    <img src="styles/legend/Rt24StopPop5Min_20_0.png" /> 5 min<br />'
        });
var format_StopPop5mindissolvedUp_21 = new ol.format.GeoJSON();
var features_StopPop5mindissolvedUp_21 = format_StopPop5mindissolvedUp_21.readFeatures(json_StopPop5mindissolvedUp_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopPop5mindissolvedUp_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopPop5mindissolvedUp_21.addFeatures(features_StopPop5mindissolvedUp_21);
var lyr_StopPop5mindissolvedUp_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopPop5mindissolvedUp_21, 
                style: style_StopPop5mindissolvedUp_21,
                popuplayertitle: "Stop Pop 5 min dissolved Up",
                interactive: true,
                title: '<img src="styles/legend/StopPop5mindissolvedUp_21.png" /> Stop Pop 5 min dissolved Up'
            });
var format_StopPop5MinDissolvedDwn_22 = new ol.format.GeoJSON();
var features_StopPop5MinDissolvedDwn_22 = format_StopPop5MinDissolvedDwn_22.readFeatures(json_StopPop5MinDissolvedDwn_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopPop5MinDissolvedDwn_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopPop5MinDissolvedDwn_22.addFeatures(features_StopPop5MinDissolvedDwn_22);
var lyr_StopPop5MinDissolvedDwn_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopPop5MinDissolvedDwn_22, 
                style: style_StopPop5MinDissolvedDwn_22,
                popuplayertitle: "Stop Pop 5 Min Dissolved Dwn",
                interactive: true,
                title: '<img src="styles/legend/StopPop5MinDissolvedDwn_22.png" /> Stop Pop 5 Min Dissolved Dwn'
            });
var format_PopRt24250Mtrs_23 = new ol.format.GeoJSON();
var features_PopRt24250Mtrs_23 = format_PopRt24250Mtrs_23.readFeatures(json_PopRt24250Mtrs_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopRt24250Mtrs_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopRt24250Mtrs_23.addFeatures(features_PopRt24250Mtrs_23);
var lyr_PopRt24250Mtrs_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopRt24250Mtrs_23, 
                style: style_PopRt24250Mtrs_23,
                popuplayertitle: "Pop Rt 24 250 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/PopRt24250Mtrs_23.png" /> Pop Rt 24 250 Mtrs'
            });
var format_PopRt24100Mtrs_24 = new ol.format.GeoJSON();
var features_PopRt24100Mtrs_24 = format_PopRt24100Mtrs_24.readFeatures(json_PopRt24100Mtrs_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopRt24100Mtrs_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopRt24100Mtrs_24.addFeatures(features_PopRt24100Mtrs_24);
var lyr_PopRt24100Mtrs_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopRt24100Mtrs_24, 
                style: style_PopRt24100Mtrs_24,
                popuplayertitle: "Pop Rt 24 100 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/PopRt24100Mtrs_24.png" /> Pop Rt 24 100 Mtrs'
            });
var format_Route24Mtrs_25 = new ol.format.GeoJSON();
var features_Route24Mtrs_25 = format_Route24Mtrs_25.readFeatures(json_Route24Mtrs_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route24Mtrs_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route24Mtrs_25.addFeatures(features_Route24Mtrs_25);
var lyr_Route24Mtrs_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route24Mtrs_25, 
                style: style_Route24Mtrs_25,
                popuplayertitle: "Route 24 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route24Mtrs_25.png" /> Route 24 Mtrs'
            });
var format_MBMCRT24StageAssessment_26 = new ol.format.GeoJSON();
var features_MBMCRT24StageAssessment_26 = format_MBMCRT24StageAssessment_26.readFeatures(json_MBMCRT24StageAssessment_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCRT24StageAssessment_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCRT24StageAssessment_26.addFeatures(features_MBMCRT24StageAssessment_26);
var lyr_MBMCRT24StageAssessment_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCRT24StageAssessment_26, 
                style: style_MBMCRT24StageAssessment_26,
                popuplayertitle: "MBMC RT 24 Stage Assessment",
                interactive: true,
    title: 'MBMC RT 24 Stage Assessment<br />\
    <img src="styles/legend/MBMCRT24StageAssessment_26_0.png" /> Kashimira<br />\
    <img src="styles/legend/MBMCRT24StageAssessment_26_1.png" /> Mira Road Station E<br />\
    <img src="styles/legend/MBMCRT24StageAssessment_26_2.png" /> MTNL<br />\
    <img src="styles/legend/MBMCRT24StageAssessment_26_3.png" /> Pleasant Park<br />\
    <img src="styles/legend/MBMCRT24StageAssessment_26_4.png" /> Silver Park<br />\
    <img src="styles/legend/MBMCRT24StageAssessment_26_5.png" /> Western Park E<br />\
    <img src="styles/legend/MBMCRT24StageAssessment_26_6.png" /> <br />'
        });
var format_Route24Stops_27 = new ol.format.GeoJSON();
var features_Route24Stops_27 = format_Route24Stops_27.readFeatures(json_Route24Stops_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route24Stops_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route24Stops_27.addFeatures(features_Route24Stops_27);
var lyr_Route24Stops_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route24Stops_27, 
                style: style_Route24Stops_27,
                popuplayertitle: "Route 24 Stops",
                interactive: true,
                title: '<img src="styles/legend/Route24Stops_27.png" /> Route 24 Stops'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MBMCWealthIndex_1.setVisible(true);lyr_AreaUncovered_2.setVisible(true);lyr_PopulationMBMC_3.setVisible(true);lyr_StopPopWithinMBMC_4.setVisible(true);lyr_RailwayStn_5.setVisible(true);lyr_GovtOffice_6.setVisible(true);lyr_Education_7.setVisible(true);lyr_PrivateOffices_8.setVisible(true);lyr_PSU_9.setVisible(true);lyr_Hospitals_10.setVisible(true);lyr_Signals_11.setVisible(true);lyr_Temples_12.setVisible(true);lyr_StopsInsideMBMCcsv_13.setVisible(true);lyr_MBMCStopsMapped_14.setVisible(true);lyr_MBMCRoutesStats_15.setVisible(true);lyr_MBMCStops_16.setVisible(true);lyr_StopsinsideMBMC_17.setVisible(true);lyr_MBMCTerminals_18.setVisible(true);lyr_Rt24StopPop10Min_19.setVisible(true);lyr_Rt24StopPop5Min_20.setVisible(true);lyr_StopPop5mindissolvedUp_21.setVisible(true);lyr_StopPop5MinDissolvedDwn_22.setVisible(true);lyr_PopRt24250Mtrs_23.setVisible(true);lyr_PopRt24100Mtrs_24.setVisible(true);lyr_Route24Mtrs_25.setVisible(true);lyr_MBMCRT24StageAssessment_26.setVisible(true);lyr_Route24Stops_27.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MBMCWealthIndex_1,lyr_AreaUncovered_2,lyr_PopulationMBMC_3,lyr_StopPopWithinMBMC_4,lyr_RailwayStn_5,lyr_GovtOffice_6,lyr_Education_7,lyr_PrivateOffices_8,lyr_PSU_9,lyr_Hospitals_10,lyr_Signals_11,lyr_Temples_12,lyr_StopsInsideMBMCcsv_13,lyr_MBMCStopsMapped_14,lyr_MBMCRoutesStats_15,lyr_MBMCStops_16,lyr_StopsinsideMBMC_17,lyr_MBMCTerminals_18,lyr_Rt24StopPop10Min_19,lyr_Rt24StopPop5Min_20,lyr_StopPop5mindissolvedUp_21,lyr_StopPop5MinDissolvedDwn_22,lyr_PopRt24250Mtrs_23,lyr_PopRt24100Mtrs_24,lyr_Route24Mtrs_25,lyr_MBMCRT24StageAssessment_26,lyr_Route24Stops_27];
lyr_MBMCWealthIndex_1.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_AreaUncovered_2.set('fieldAliases', {'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop_2': 'Pop_2', 'Pop/Km2': 'Pop/Km2', 'Area UC KM': 'Area UC KM', 'Peri UC KM': 'Peri UC KM', 'Pop UC': 'Pop UC', 'NoCoverage': 'NoCoverage', });
lyr_PopulationMBMC_3.set('fieldAliases', {'fid': 'fid', 'h3': 'h3', 'population': 'population', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_StopPopWithinMBMC_4.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_RailwayStn_5.set('fieldAliases', {'network': 'network', 'name': 'name', });
lyr_GovtOffice_6.set('fieldAliases', {'addr_state': 'addr_state', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', 'website': 'website', 'phone': 'phone', 'opening_ho': 'opening_ho', 'descriptio': 'descriptio', 'name_en': 'name_en', 'amenity': 'amenity', 'name_hi': 'name_hi', 'addr_house': 'addr_house', 'layer': 'layer', });
lyr_Education_7.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', });
lyr_PrivateOffices_8.set('fieldAliases', {'office': 'office', 'name': 'name', });
lyr_PSU_9.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', });
lyr_Hospitals_10.set('fieldAliases', {'amenity': 'amenity', 'addr_full': 'addr_full', 'name': 'name', });
lyr_Signals_11.set('fieldAliases', {'highway': 'highway', });
lyr_Temples_12.set('fieldAliases', {'religion': 'religion', 'amenity': 'amenity', 'name': 'name', });
lyr_StopsInsideMBMCcsv_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descriptio': 'descriptio', 'altitudeMo': 'altitudeMo', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'shapeName': 'shapeName', 'Area_KM': 'Area_KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop_Km2': 'Pop_Km2', });
lyr_MBMCStopsMapped_14.set('fieldAliases', {'Name': 'Name', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Name_2': 'Name_2', 'Length Km': 'Length Km', });
lyr_MBMCRoutesStats_15.set('fieldAliases', {'Name': 'Name', 'Length Km': 'Length Km', });
lyr_MBMCStops_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_StopsinsideMBMC_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_MBMCTerminals_18.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', });
lyr_Rt24StopPop10Min_19.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt24StopPop5Min_20.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_StopPop5mindissolvedUp_21.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Daily Up': 'Daily Up', 'Daily up%': 'Daily up%', });
lyr_StopPop5MinDissolvedDwn_22.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Daily Down': 'Daily Down', 'Daily Dwn%': 'Daily Dwn%', });
lyr_PopRt24250Mtrs_23.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_PopRt24100Mtrs_24.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_Route24Mtrs_25.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_MBMCRT24StageAssessment_26.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'Pop': 'Pop', 'Ridership': 'Ridership', 'Revenue': 'Revenue', 'Daily_Pax': 'Daily_Pax', 'Daily_Rev': 'Daily_Rev', 'Pax_Pop': 'Pax_Pop', 'Rev_Pop': 'Rev_Pop', });
lyr_Route24Stops_27.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Name_2': 'Name_2', });
lyr_MBMCWealthIndex_1.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_AreaUncovered_2.set('fieldImages', {'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop_2': 'TextEdit', 'Pop/Km2': 'TextEdit', 'Area UC KM': 'TextEdit', 'Peri UC KM': 'TextEdit', 'Pop UC': 'TextEdit', 'NoCoverage': 'Range', });
lyr_PopulationMBMC_3.set('fieldImages', {'fid': 'TextEdit', 'h3': 'TextEdit', 'population': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_StopPopWithinMBMC_4.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_RailwayStn_5.set('fieldImages', {'network': 'TextEdit', 'name': 'TextEdit', });
lyr_GovtOffice_6.set('fieldImages', {'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'opening_ho': 'TextEdit', 'descriptio': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'name_hi': 'TextEdit', 'addr_house': 'TextEdit', 'layer': 'TextEdit', });
lyr_Education_7.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_PrivateOffices_8.set('fieldImages', {'office': 'TextEdit', 'name': 'TextEdit', });
lyr_PSU_9.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_Hospitals_10.set('fieldImages', {'amenity': 'TextEdit', 'addr_full': 'TextEdit', 'name': 'TextEdit', });
lyr_Signals_11.set('fieldImages', {'highway': 'TextEdit', });
lyr_Temples_12.set('fieldImages', {'religion': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_StopsInsideMBMCcsv_13.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'descriptio': '', 'altitudeMo': '', 'Sr__No_': '', 'Depot_Name': '', 'center_lat': '', 'center_lon': '', 'shapeName': '', 'Area_KM': '', 'Perimeter': '', 'Pop': '', 'Pop_Km2': '', });
lyr_MBMCStopsMapped_14.set('fieldImages', {'Name': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Name_2': 'TextEdit', 'Length Km': 'TextEdit', });
lyr_MBMCRoutesStats_15.set('fieldImages', {'Name': 'TextEdit', 'Length Km': '', });
lyr_MBMCStops_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_StopsinsideMBMC_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_MBMCTerminals_18.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', });
lyr_Rt24StopPop10Min_19.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Rt24StopPop5Min_20.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_StopPop5mindissolvedUp_21.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', 'Daily Up': 'Range', 'Daily up%': 'Range', });
lyr_StopPop5MinDissolvedDwn_22.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'Daily Down': 'Range', 'Daily Dwn%': 'Range', });
lyr_PopRt24250Mtrs_23.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_PopRt24100Mtrs_24.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_Route24Mtrs_25.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': '', 'Bus Time': '', });
lyr_MBMCRT24StageAssessment_26.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'Pop': 'TextEdit', 'Ridership': 'TextEdit', 'Revenue': 'TextEdit', 'Daily_Pax': 'TextEdit', 'Daily_Rev': 'TextEdit', 'Pax_Pop': 'TextEdit', 'Rev_Pop': 'TextEdit', });
lyr_Route24Stops_27.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Name_2': 'TextEdit', });
lyr_MBMCWealthIndex_1.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'rwi': 'no label', 'error': 'no label', 'shapeName': 'no label', 'Area KM': 'no label', 'Perimeter': 'no label', 'Pop': 'no label', 'Pop/Km2': 'no label', });
lyr_AreaUncovered_2.set('fieldLabels', {'shapeName': 'no label', 'Area KM': 'no label', 'Perimeter': 'no label', 'Pop_2': 'no label', 'Pop/Km2': 'no label', 'Area UC KM': 'no label', 'Peri UC KM': 'no label', 'Pop UC': 'no label', 'NoCoverage': 'no label', });
lyr_PopulationMBMC_3.set('fieldLabels', {'fid': 'no label', 'h3': 'no label', 'population': 'header label - visible with data', 'shapeName': 'inline label - visible with data', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', });
lyr_StopPopWithinMBMC_4.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_RailwayStn_5.set('fieldLabels', {'network': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_GovtOffice_6.set('fieldLabels', {'addr_state': 'inline label - always visible', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'opening_ho': 'hidden field', 'descriptio': 'hidden field', 'name_en': 'hidden field', 'amenity': 'hidden field', 'name_hi': 'hidden field', 'addr_house': 'hidden field', 'layer': 'header label - visible with data', });
lyr_Education_7.set('fieldLabels', {'amenity': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_PrivateOffices_8.set('fieldLabels', {'office': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_PSU_9.set('fieldLabels', {'amenity': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_Hospitals_10.set('fieldLabels', {'amenity': 'inline label - always visible', 'addr_full': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_Signals_11.set('fieldLabels', {'highway': 'header label - visible with data', });
lyr_Temples_12.set('fieldLabels', {'religion': 'inline label - always visible', 'amenity': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_StopsInsideMBMCcsv_13.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descriptio': 'no label', 'altitudeMo': 'no label', 'Sr__No_': 'no label', 'Depot_Name': 'no label', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'shapeName': 'inline label - always visible', 'Area_KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop_Km2': 'inline label - always visible', });
lyr_MBMCStopsMapped_14.set('fieldLabels', {'Name': 'header label - visible with data', 'Sr__No_': 'inline label - always visible', 'Depot_Name': 'inline label - always visible', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'Name_2': 'inline label - always visible', 'Length Km': 'inline label - always visible', });
lyr_MBMCRoutesStats_15.set('fieldLabels', {'Name': 'header label - visible with data', 'Length Km': 'inline label - always visible', });
lyr_MBMCStops_16.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Sr__No_': 'hidden field', 'Depot_Name': 'hidden field', 'center_lat': 'inline label - visible with data', 'center_lon': 'inline label - visible with data', });
lyr_StopsinsideMBMC_17.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Sr__No_': 'inline label - always visible', 'Depot_Name': 'inline label - always visible', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'shapeName': 'inline label - always visible', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', });
lyr_MBMCTerminals_18.set('fieldLabels', {'Name': 'header label - visible with data', 'layer': 'inline label - always visible', });
lyr_Rt24StopPop10Min_19.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt24StopPop5Min_20.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_StopPop5mindissolvedUp_21.set('fieldLabels', {'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Daily Up': 'inline label - always visible', 'Daily up%': 'header label - visible with data', });
lyr_StopPop5MinDissolvedDwn_22.set('fieldLabels', {'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Daily Down': 'inline label - always visible', 'Daily Dwn%': 'header label - visible with data', });
lyr_PopRt24250Mtrs_23.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Pop': 'header label - visible with data', });
lyr_PopRt24100Mtrs_24.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Pop': 'header label - visible with data', });
lyr_Route24Mtrs_25.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'header label - visible with data', });
lyr_MBMCRT24StageAssessment_26.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Ridership': 'inline label - always visible', 'Revenue': 'inline label - always visible', 'Daily_Pax': 'inline label - always visible', 'Daily_Rev': 'inline label - always visible', 'Pax_Pop': 'inline label - always visible', 'Rev_Pop': 'header label - visible with data', });
lyr_Route24Stops_27.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Sr__No_': 'inline label - always visible', 'Depot_Name': 'inline label - always visible', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'Name_2': 'inline label - visible with data', });
lyr_Route24Stops_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});