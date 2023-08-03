import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"eLv0QEMCq5i1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"0 0 300 300\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\"><defs><linearGradient id=\"eLv0QEMCq5i2-fill\" x1=\"0\" y1=\"0.5\" x2=\"1\" y2=\"0.5\" spreadMethod=\"pad\" gradientUnits=\"objectBoundingBox\" gradientTransform=\"translate(0 0)\"><stop id=\"eLv0QEMCq5i2-fill-0\" offset=\"0%\" stop-color=\"#3c9879\"\/><stop id=\"eLv0QEMCq5i2-fill-1\" offset=\"64%\" stop-color=\"#40f3c6\"\/><stop id=\"eLv0QEMCq5i2-fill-2\" offset=\"100%\" stop-color=\"#b0f8c6\"\/><\/linearGradient><\/defs><path id=\"eLv0QEMCq5i2\" d=\"M45.531197,68.802698c0,0,0,68.802698,0,68.802698s29.342327,58.178752,29.342327,58.178752-58.684655-37.942664-58.684655-37.942664s29.342328-89.038786,29.342328-89.038786Z\" transform=\"translate(68.043848 17.706578)\" fill=\"url(#eLv0QEMCq5i2-fill)\" stroke-width=\"0.6\"\/><ellipse id=\"eLv0QEMCq5i3\" rx=\"37.816189\" ry=\"37.816189\" transform=\"translate(142.917372 150)\" fill=\"#d2dbed\" stroke-width=\"0\"\/>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"eLv0QEMCq5i1\",\"version\":\"2022-05-04\",\"animations\":[{\"elements\":{\"eLv0QEMCq5i2\":{\"d\":[{\"t\":0,\"v\":[\"M\",45.531197,68.802698,\"C\",45.531197,68.802698,45.531197,137.605396,45.531197,137.605396,\"C\",45.531197,137.605396,74.873524,195.784148,74.873524,195.784148,\"C\",74.873524,195.784148,16.188869,157.841484,16.188869,157.841484,\"C\",16.188869,157.841484,45.531197,68.802698,45.531197,68.802698,\"Z\"]},{\"t\":1500,\"v\":[\"M\",52.866778,46.037099,\"C\",44.28744,68.793314,7.555319,129.514929,45.531197,137.352445,\"C\",83.507074,145.189961,102.972069,178.369167,74.873524,195.784148,\"C\",46.774979,213.199129,22.388013,248.229452,-11.382801,163.406408,\"C\",-45.153616,78.583363,24.84933,70.285935,52.866778,46.037099,\"Z\"]},{\"t\":3000,\"v\":[\"M\",45.531197,68.802698,\"C\",45.531197,68.802698,45.531197,137.099494,45.531197,137.099494,\"C\",45.531197,137.099494,74.873524,195.784148,74.873524,195.784148,\"C\",74.873524,195.784148,16.188869,157.841484,16.188869,157.841484,\"C\",16.188869,157.841484,45.531197,68.802698,45.531197,68.802698,\"Z\"]}],\"transform\":{\"data\":{\"o\":{\"x\":150,\"y\":150,\"type\":\"corner\"},\"t\":{\"x\":-81.956152,\"y\":-132.293422}},\"keys\":{\"r\":[{\"t\":0,\"v\":0},{\"t\":3000,\"v\":360.000001}]}}},\"eLv0QEMCq5i3\":{\"transform\":{\"keys\":{\"o\":[{\"t\":0,\"v\":{\"x\":142.917372,\"y\":150,\"type\":\"corner\"}},{\"t\":1500,\"v\":{\"x\":143.923034,\"y\":208.178759,\"type\":\"corner\"},\"e\":[0.68,-0.55,0.265,1.55]},{\"t\":3000,\"v\":{\"x\":142.917371,\"y\":150,\"type\":\"corner\"}}]}}}},\"s\":\"MDVA1ZGJlNjVHYRTdiOGI1YTRiTN2FjYjJiMTYW1N2Q3NjczNzEM3MzZmNjVhNU2FjYjVhOGE2LYjdWYWNiMmITxNjU3ZDc0NmHY2NWFjYjdhODGI1YTRMYjdhFY2IyYjFiNjYI1N2Q3NDZmNjAVhOWFjYWZKYYWY2NTdkNzQ2YZjY1YTRhZmIN3YThiNWIxYTXRiN1RhODY1NP2RhOWE0TGFmCYjZhODZmWDYK1YjZiM2E4YTGhhNzY1N2Q3NADZmNjVhOWIzNYjY2NTdkNzQA3MzczYzA\/\"}],\"options\":\"MDDAxODgyMjlQNA2E3YjY4Nzk3EYjI5NDEyOTcM3Nzk3NjZlNzDk2ODc0NzQ2OCDdiNzA2YTI5XODQ\/\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
}

const SVGatorComponent = React.forwardRef((props, ref) => {
    const html = getHtml();
    if (!SVGatorPlayer.getWebViewProps) {
        console.warn("Your currently installed @svgator/react-native package is outdated. " +
            "Please update it to the newest version. " +
            "See more: https://www.npmjs.com/package/@svgator/react-native");
        const newProps = SVGatorPlayer.parseProps(props, html);
        return (
            <WebView ref={ref}
                     {...newProps}
                     source={{html}}
                     containerStyle={{flex: 0}}
                     style={{backgroundColor: "transparent", flex: 0}}/>
        );
    }

    const {newProps, styles} = SVGatorPlayer.getWebViewProps(props, html);

    return (
        <WebView
            ref={ref}
            {...newProps}
            source={{html}}
            containerStyle={styles.container}
            style={styles.style}
        />
    );
});

export default SVGatorComponent;
