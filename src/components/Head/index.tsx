import { Helmet } from "react-helmet";

const Head: React.FC = () => {
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.scielo.br/static/css/scielo-bundle.css?v="
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.scielo.br/static/css/scielo-article.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.scielo.br/static/css/scielo-bundle-print.css?v="
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.plu.mx/popup.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://badge.dimensions.ai/badge.css"
        />
        <style type="text/css">{`
          .lKs4zqpXs8p4EV6VgHcA {
            font-family: scite-icons !important;
            speak: none;
            font-style: normal !important;
            font-weight: normal !important;
            font-variant: normal !important;
            text-transform: none !important;
            line-height: 1.5 !important;
          }
          
          .ubAXsDQIVxPy7kt2Jh3L::before {
            content: "\\e80a";
            color: #828179;
          }
          
          .RgPxr1vQAcEn45i8yh9P::before {
            content: "\\e80a";
            color: #0062ff;
          }
          
          .ebKwowxwk1g0EBwY2gqO::before {
            content: "\\e902";
            color: #393f43;
          }
          
          .MFaWY1toHPmKPRq2FJ2Q::before {
            content: "\\e903";
            color: #26a65b;
          }
          
          .JD8Tnz2TWU6NhZZdXiYl::before {
            content: "\\e901";
            color: #ff3b30;
          }
          
          .Zm39B_kKjKTuOnm08ms5::before {
            content: "\\e90a";
            color: #82807d;
          }
          
          .TZNOPlB20q9PieiSXF7N::before {
            content: "\\e90b";
            color: #82807d;
          }
          
          .Cioyg2bMwDcsPv7oRCbx {
            line-height: 1rem !important;
          }
          
          .vkmH0WUIm4dFsoFwbk4j::before {
            content: "\\e922";
            color: #82807d;
          }
          
          .av4dV7VADdXVB3iz0tJe::before {
            content: "\\e925";
            color: #82807d;
          }
          
        `}</style>
        <style type="text/css">{`
        .e6fJSwD4pjZgu_8xYali {
          display: flex;
          font-size: 14.5px;
        }
        
        .FvxKWukQNSOunydq8rnd {
          display: inline-block;
          width: 82px;
          margin-right: 12px;
          text-transform: capitalize;
        }
        
        .aVKD9RJUZCu_UAcCkTEm {
          margin-right: 6px;
          text-transform: capitalize;
        }
        
        .bDWV8q4E3_Ht6eaF1nqt {
          display: inline-block;
          box-sizing: border-box;
        }
        
        .kIoPWUefWaZeBl43utes {
          display: flex;
          box-sizing: border-box;
        }
        
        .R6ZsfDX_061L1zLQj2Tq {
          display: inline-flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }
        
        .rwKAOAHrDxnQRiMjeUuo {
          margin-left: 8px;
        }
        
        .CSSEnDVY1vB0Zs6UWRsr {
          margin-left: 6px;
        }
        
        .nM0dpzD1fl4pkBAV8CyQ {
          border-left: 1px solid #cfcfcf;
          padding: 4px 8px;
        }
        
        .nM0dpzD1fl4pkBAV8CyQ:first-child {
          border-left: none;
        }
        
        .nM0dpzD1fl4pkBAV8CyQ > .FvxKWukQNSOunydq8rnd {
          width: auto;
        }
        
        .nM0dpzD1fl4pkBAV8CyQ > .kIoPWUefWaZeBl43utes > .FvxKWukQNSOunydq8rnd {
          width: auto;
          vertical-align: middle;
        }
        
        .gnJJc7tm5Gq5enCY49cQ {
          font-size: 10px;
          padding: 2px 4px;
        }
        `}</style>
        <style type="text/css">{`
          .KbtNge7u61zRHrvN2L0A * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          .KbtNge7u61zRHrvN2L0A {
            line-height: 1.5;
            padding: 8px;
            padding-right: 12px;
            padding-bottom: 0;
            color: #0e1d1a;
            background-color: white;
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 16px;
            cursor: pointer;
            will-change: opacity, background-color;
            transition: all 200ms ease-in-out;
            opacity: 0;
            pointer-events: none;
            display: flex;
            flex-direction: column;
          }
          
          .Sr5_7hx_kwhd5wN0msYB {
            /* Something of a hack so we can avoid
              setting overflow: 'hidden' on the
              outer div whilst having a tooltip
              translated outside of it */
            border-radius: 8px 0 0;
            padding-bottom: 8px;
          }
          
          .a0pz4zpPOmwg3YlWGYUX {
            padding: 0 8px;
            flex-direction: row;
            height: 100%;
          }
          
          .E0QvHUs7f72sUyjcRUvp {
            opacity: 1;
            pointer-events: auto;
          }
          
          .KbtNge7u61zRHrvN2L0A:hover {
            background-color: #f4f4f4;
          }
          
          .oGMNhGGHIBybXUPYF_e9 {
            display: block;
            margin-bottom: 8px;
            width: 4em;
            max-width: 4em;
          }
          
          .iY8Y81NxuGT3paI25DDE {
            width: 3em;
            max-width: 3em;
            padding-left: 4px;
          }
          
          .kjb6smtIxOpzM0A5VgIg {
            padding: 0 4px;
          }
          
          .M4s21c9mmWx1ieUF2vkg {
            display: none;
          }
          
        `}</style>
        <style type="text/css">{`
          .hdfIGs05SJewsT9HXqtY {
            speak: none;
            font-style: normal !important;
            font-weight: normal !important;
            font-variant: normal !important;
            line-height: 1.5 !important;
            margin-right: 5px !important;
            display: inline-block !important;
          }
          
          .hdfIGs05SJewsT9HXqtY::before {
            color: white;
            padding: 2px 4px;
            text-align: center;
            width: 12px;
            transform: scale(1);
            display: inline-block !important;
            border-radius: 4px;
          }
          
          .xjVLDZ9rrfTQCvJnOEFB::before {
            content: "I";
            background: #002ab2;
          }
          
          .PtKxYWs58FwiGZsIa3Mg::before {
            content: "M";
            background: #0036e5;
          }
          
          .U3kntXLbrey22g9DG3V7::before {
            content: "R";
            background: #0062ff;
          }
          
          .HgCQit8_Kb0sQzFnD2oh::before {
            content: "D";
            background: #66a3ff;
          }
          
          .OfZoHT19ODpXZ6z93XpV::before {
            content: "O";
            background: #9ec4f0;
          }
          
          .J3gThRLtcE1dECzZ8365 {
            line-height: 1 !important;
          }
          
        `}</style>
        <style type="text/css">{`
          .t0gehVGGbYQMufzfbTG0 * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          .t0gehVGGbYQMufzfbTG0 {
            padding: 8px;
          }
          
          .t0gehVGGbYQMufzfbTG0:hover {
            background-color: #f4f4f4 !important;
          }
          
          .PWXSE5DGEXRuhoBqUwRi {
            display: flex;
            align-items: center;
          }
          
          .eWfV5gftPZ3dET7JsPUP {
            line-height: 1.5;
            padding-right: 12px;
            padding-bottom: 0;
            color: #0e1d1a;
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 16px;
            cursor: pointer;
            will-change: opacity, background-color;
            transition: all 200ms ease-in-out;
            opacity: 0;
            pointer-events: none;
            display: flex;
            flex-direction: column;
          }
          
          .l0uE6c1aANv5YwWChde4 {
            /* Something of a hack so we can avoid
              setting overflow: 'hidden' on the
              outer div whilst having a tooltip
              translated outside of it */
            border-radius: 8px 0 0;
            padding-bottom: 8px;
          }
          
          .WY6Mv79yp2Gjsg4XmH8r {
            padding: 0 8px;
            flex-direction: row;
            height: 100%;
          }
          
          .inp0Kne3t_tEzKSTwiPY {
            opacity: 1;
            pointer-events: auto;
          }
          
          .ALVxmcJP_Yz38dt0K9od {
            display: block;
            margin-bottom: 8px;
            width: 4em;
            max-width: 4em;
          }
          
          .h3qMOVrNTf7RCpdy9yOw {
            width: 3em;
            max-width: 3em;
            padding-left: 4px;
          }
          
          .KBCzPJRl1GaMmD82TDA9 {
            padding: 0 4px;
          }
          
          .rGzZb1AGWqfZeKhm_pTH {
            display: none;
          }
          
          .CsDe84zplb_vCMblRxY5 {
            text-align: center;
            width: 140px;
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 12px;
            margin-top: 4px;
          }
          
          .V49Lb2uuXqrv7v7U9mQL {
            display: block;
            font-weight: 600;
          }
          
        `}</style>
        <style type="text/css">{`
          .WaJfckMfIXKpjzwS10jA {
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 16px;
            opacity: 0;
            pointer-events: none;
            will-change: opacity;
            transition: opacity 200ms ease-in-out;
            padding: 16px;
            border: 1px solid #ebebeb;
            border-radius: 8px;
            background-color: white;
            box-shadow: 0 0 37px 0 rgb(0 0 0 / 5%);
            z-index: 9999;
            width: 250px;
            height: auto;
            cursor: pointer;
          }
          
          .C0p_hvgp9bm2lVVJGIYG {
            opacity: 1;
            pointer-events: auto;
          }
          
          .WaJfckMfIXKpjzwS10jA[data-placement="top"]::after,
          .WaJfckMfIXKpjzwS10jA[data-placement="top"]::before {
            top: 100%;
            left: 50%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
          }
          
          .WaJfckMfIXKpjzwS10jA[data-placement="top"]::after {
            border-color: rgb(255 255 255 / 0%);
            border-top-color: #fff;
            border-width: 10px;
            margin-left: -10px;
          }
          
          .WaJfckMfIXKpjzwS10jA[data-placement="top"]::before {
            border-color: rgb(235 235 235 / 0%);
            border-top-color: #ebebeb;
            border-width: 11px;
            margin-left: -11px;
          }
          
          .WaJfckMfIXKpjzwS10jA[data-placement="left"]::after,
          .WaJfckMfIXKpjzwS10jA[data-placement="left"]::before {
            left: 100%;
            top: 50%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
          }
          
          .WaJfckMfIXKpjzwS10jA[data-placement="left"]::after {
            border-color: rgb(255 255 255 / 0%);
            border-left-color: #fff;
            border-width: 10px;
            margin-top: -10px;
          }
          
          .WaJfckMfIXKpjzwS10jA[data-placement="left"]::before {
            border-color: rgb(235 235 235 / 0%);
            border-left-color: #ebebeb;
            border-width: 11px;
            margin-top: -11px;
          }
          
          .WaJfckMfIXKpjzwS10jA[data-placement="right"]::after,
          .WaJfckMfIXKpjzwS10jA[data-placement="right"]::before {
            right: 100%;
            top: 50%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
          }
          
          .WaJfckMfIXKpjzwS10jA[data-placement="right"]::after {
            border-color: rgb(255 255 255 / 0%);
            border-right-color: #fff;
            border-width: 10px;
            margin-top: -10px;
          }
          
          .WaJfckMfIXKpjzwS10jA[data-placement="right"]::before {
            border-color: rgb(235 235 235 / 0%);
            border-right-color: #ebebeb;
            border-width: 11px;
            margin-top: -11px;
          }
          
          .WaJfckMfIXKpjzwS10jA[data-placement="bottom"]::after,
          .WaJfckMfIXKpjzwS10jA[data-placement="bottom"]::before {
            bottom: 100%;
            left: 50%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
          }
          
          .WaJfckMfIXKpjzwS10jA[data-placement="bottom"]::after {
            border-color: rgb(255 255 255 / 0%);
            border-bottom-color: #fff;
            border-width: 10px;
            margin-left: -10px;
          }
          
          .WaJfckMfIXKpjzwS10jA[data-placement="bottom"]::before {
            border-color: rgb(235 235 235 / 0%);
            border-bottom-color: #ebebeb;
            border-width: 11px;
            margin-left: -11px;
          }
          
          .igE7XcC3u7d_MG2hIL8E {
            /* So it doesn't get wider than the badge itself
               * based on the width of the container */
          }
          
          .U2rN5H7TsKCbbJo7W9J5 {
            font-size: 14px;
          }
          
          .VexCj4vKNhr3cKyZSo2T {
            line-height: 1.5;
          }
          
          .mB3Ylwscg6sJMk8k6lsS {
            display: inline-block;
            margin-top: 0.5rem;
          }
          
          ._Nt4shW5tBw4a7zU2DsH {
            margin: 0.5rem 0;
            font-weight: bold;
          }
          
          .A7Lk1rHjD05kZrsREtm8 {
            display: inline-block;
          }
          
          .qofwVghpjLkWfnEtB1ij {
            display: inline;
          }
          
          .O3DAlRrm_dT5Ynsjq6QP {
            display: block;
            margin: 0.5rem 0;
            margin-left: 1rem;
          }
          
          .KKV6MAxBexaZQhJEpEwp {
            color: #828179;
          }
          
          .gKlqYi81DGVgiX5pIRmY {
            font-weight: bold;
            color: black;
          }
          
          ._jKR25ary1HKFp65pmyg {
            text-decoration: none;
            color: inherit;
            font-weight: inherit;
            transition: 200ms opacity ease-in-out;
          }
          
          ._jKR25ary1HKFp65pmyg:hover,
          ._jKR25ary1HKFp65pmyg:active {
            opacity: 0.8;
          }
          
          .wLtkOnf5DJcqzBogNArQ {
            display: inline-block;
            background-color: #0062ff;
            border-radius: 6px;
            padding: 6px 12px;
            margin-top: 12px;
            color: white;
            text-decoration: none;
            transition: background-color 200ms ease-in-out;
          }
          
          .wLtkOnf5DJcqzBogNArQ:hover {
            background-color: #4da3ff;
          
            /* For (a) site(s) that specifies a:hover color to be inherit */
            color: white;
          }
          
          .CkBEg1J0b8OWbCA89JXT {
            display: block;
            width: 5em;
          }
          
          .Nz8mj85YKGZ16sXBpuEw {
            display: block;
            margin: 0.5rem 0;
          }
          
          .kwAzV97K0rpSmi0yjCrL {
            color: #d84215;
            font-weight: bold;
          }
          
          .NtYUKRiC2Z5SZOMUKUpa {
            color: black;
            font-weight: bold;
          }          
        `}</style>
        <style type="text/css">{`
          /* stylelint-disable */
          .scite-badge {
            display: inline-block;
          }
          
          .scite-badge .scite-tally {
            border-radius: 8px;
            border: 1px solid #cfcfcf;
            min-height: 80px;
            box-sizing: border-box;
          }
          
          .scite-badge[data-layout='horizontal'] .scite-tally {
            min-height: 0;
            max-height: 32px;
          }
          
          .scite-badge:not([data-chart-type]) .scite-section-tally {
            border-radius: 8px;
            height: min-content;
            width: min-content;
            padding: 8px 0 0 8px;
            border: 1px solid #cfcfcf;
            box-sizing: border-box;
          }
          
          .scite-badge[data-section-tally-layout='horizontal'] .scite-section-tally {
            padding: 0;
          }
          
        `}</style>
        <style type="text/css">{`
          @import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap);
        `}</style>
        <style type="text/css">{`
          @font-face {
            font-family: scite-icons;
            src: url('https://cdn.scite.ai/assets/fonts/scite-icons/scite-icons.eot?v=5');
            src:
              url('https://cdn.scite.ai/assets/fonts/scite-icons/scite-icons.eot?v=5#iefix') format('embedded-opentype'),
              url('https://cdn.scite.ai/assets/fonts/scite-icons/scite-icons.woff2?v=5') format('woff2'),
              url('https://cdn.scite.ai/assets/fonts/scite-icons/scite-icons.woff?v=5') format('woff'),
              url('https://cdn.scite.ai/assets/fonts/scite-icons/scite-icons.ttf?v=5') format('truetype'),
              url('https://cdn.scite.ai/assets/fonts/scite-icons/scite-icons.svg?v=5#fontello') format('svg');
            font-weight: normal;
            font-style: normal;
          }
          
        `}</style>
        <style type="text/css">
          {`.MathJax_Hover_Frame {border-radius: .25em; -webkit-border-radius: .25em; -moz-border-radius: .25em; -khtml-border-radius: .25em; box-shadow: 0px 0px 15px #83A; -webkit-box-shadow: 0px 0px 15px #83A; -moz-box-shadow: 0px 0px 15px #83A; -khtml-box-shadow: 0px 0px 15px #83A; border: 1px solid #A6D ! important; display: inline-block; position: absolute}
.MathJax_Menu_Button .MathJax_Hover_Arrow {position: absolute; cursor: pointer; display: inline-block; border: 2px solid #AAA; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px; font-family: 'Courier New',Courier; font-size: 9px; color: #F0F0F0}
.MathJax_Menu_Button .MathJax_Hover_Arrow span {display: block; background-color: #AAA; border: 1px solid; border-radius: 3px; line-height: 0; padding: 4px}
.MathJax_Hover_Arrow:hover {color: white!important; border: 2px solid #CCC!important}
.MathJax_Hover_Arrow:hover span {background-color: #CCC!important}`}
        </style>
        <style type="text/css">
          {`#MathJax_About {position: fixed; left: 50%; width: auto; text-align: center; border: 3px outset; padding: 1em 2em; background-color: #DDDDDD; color: black; cursor: default; font-family: message-box; font-size: 120%; font-style: normal; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; z-index: 201; border-radius: 15px; -webkit-border-radius: 15px; -moz-border-radius: 15px; -khtml-border-radius: 15px; box-shadow: 0px 10px 20px #808080; -webkit-box-shadow: 0px 10px 20px #808080; -moz-box-shadow: 0px 10px 20px #808080; -khtml-box-shadow: 0px 10px 20px #808080; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
#MathJax_About.MathJax_MousePost {outline: none}
.MathJax_Menu {position: absolute; background-color: white; color: black; width: auto; padding: 5px 0px; border: 1px solid #CCCCCC; margin: 0; cursor: default; font: menu; text-align: left; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; z-index: 201; border-radius: 5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; -khtml-border-radius: 5px; box-shadow: 0px 10px 20px #808080; -webkit-box-shadow: 0px 10px 20px #808080; -moz-box-shadow: 0px 10px 20px #808080; -khtml-box-shadow: 0px 10px 20px #808080; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
.MathJax_MenuItem {padding: 1px 2em; background: transparent}
.MathJax_MenuArrow {position: absolute; right: .5em; padding-top: .25em; color: #666666; font-size: .75em}
.MathJax_MenuActive .MathJax_MenuArrow {color: white}
.MathJax_MenuArrow.RTL {left: .5em; right: auto}
.MathJax_MenuCheck {position: absolute; left: .7em}
.MathJax_MenuCheck.RTL {right: .7em; left: auto}
.MathJax_MenuRadioCheck {position: absolute; left: .7em}
.MathJax_MenuRadioCheck.RTL {right: .7em; left: auto}
.MathJax_MenuLabel {padding: 1px 2em 3px 1.33em; font-style: italic}
.MathJax_MenuRule {border-top: 1px solid #DDDDDD; margin: 4px 3px}
.MathJax_MenuDisabled {color: GrayText}
.MathJax_MenuActive {background-color: #606872; color: white}
.MathJax_MenuDisabled:focus, .MathJax_MenuLabel:focus {background-color: #E8E8E8}
.MathJax_ContextMenu:focus {outline: none}
.MathJax_ContextMenu .MathJax_MenuItem:focus {outline: none}
#MathJax_AboutClose {top: .2em; right: .2em}
.MathJax_Menu .MathJax_MenuClose {top: -10px; left: -10px}
.MathJax_MenuClose {position: absolute; cursor: pointer; display: inline-block; border: 2px solid #AAA; border-radius: 18px; -webkit-border-radius: 18px; -moz-border-radius: 18px; -khtml-border-radius: 18px; font-family: 'Courier New',Courier; font-size: 24px; color: #F0F0F0}
.MathJax_MenuClose span {display: block; background-color: #AAA; border: 1.5px solid; border-radius: 18px; -webkit-border-radius: 18px; -moz-border-radius: 18px; -khtml-border-radius: 18px; line-height: 0; padding: 8px 0 6px}
.MathJax_MenuClose:hover {color: white!important; border: 2px solid #CCC!important}
.MathJax_MenuClose:hover span {background-color: #CCC!important}
.MathJax_MenuClose:hover:focus {outline: none}`}
        </style>
        <style type="text/css">
          {`.MathJax_Preview .MJXf-math {color: inherit!important}`}
        </style>
        <style type="text/css">
          {`.MJX_Assistive_MathML {position: absolute!important; top: 0; left: 0; clip: rect(1px, 1px, 1px, 1px); padding: 1px 0 0 0!important; border: 0!important; height: 1px!important; width: 1px!important; overflow: hidden!important; display: block!important; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none}
.MJX_Assistive_MathML.MJX_Assistive_MathML_Block {width: 100%!important}`}
        </style>
        <style type="text/css">{`#MathJax_Zoom {position: absolute; background-color: #F0F0F0; overflow: auto; display: block; z-index: 301; padding: .5em; border: 1px solid black; margin: 0; font-weight: normal; font-style: normal; text-align: left; text-indent: 0; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box; box-shadow: 5px 5px 15px #AAAAAA; -webkit-box-shadow: 5px 5px 15px #AAAAAA; -moz-box-shadow: 5px 5px 15px #AAAAAA; -khtml-box-shadow: 5px 5px 15px #AAAAAA; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')}
#MathJax_ZoomOverlay {position: absolute; left: 0; top: 0; z-index: 300; display: inline-block; width: 100%; height: 100%; border: 0; padding: 0; margin: 0; background-color: white; opacity: 0; filter: alpha(opacity=0)}
#MathJax_ZoomFrame {position: relative; display: inline-block; height: 0; width: 0}
#MathJax_ZoomEventTrap {position: absolute; left: 0; top: 0; z-index: 302; display: inline-block; border: 0; padding: 0; margin: 0; background-color: white; opacity: 0; filter: alpha(opacity=0)}
`}</style>
        <style type="text/css">
          {`.MathJax_Preview {color: #888}
#MathJax_Message {position: fixed; left: 1em; bottom: 1.5em; background-color: #E6E6E6; border: 1px solid #959595; margin: 0px; padding: 2px 8px; z-index: 102; color: black; font-size: 80%; width: auto; white-space: nowrap}
#MathJax_MSIE_Frame {position: absolute; top: 0; left: 0; width: 0px; z-index: 101; border: 0px; margin: 0px; padding: 0px}
.MathJax_Error {color: #CC0000; font-style: italic}`}
        </style>
        <style type="text/css">{`.MJXp-script {font-size: .8em}
.MJXp-right {-webkit-transform-origin: right; -moz-transform-origin: right; -ms-transform-origin: right; -o-transform-origin: right; transform-origin: right}
.MJXp-bold {font-weight: bold}
.MJXp-italic {font-style: italic}
.MJXp-scr {font-family: MathJax_Script,'Times New Roman',Times,STIXGeneral,serif}
.MJXp-frak {font-family: MathJax_Fraktur,'Times New Roman',Times,STIXGeneral,serif}
.MJXp-sf {font-family: MathJax_SansSerif,'Times New Roman',Times,STIXGeneral,serif}
.MJXp-cal {font-family: MathJax_Caligraphic,'Times New Roman',Times,STIXGeneral,serif}
.MJXp-mono {font-family: MathJax_Typewriter,'Times New Roman',Times,STIXGeneral,serif}
.MJXp-largeop {font-size: 150%}
.MJXp-largeop.MJXp-int {vertical-align: -.2em}
.MJXp-math {display: inline-block; line-height: 1.2; text-indent: 0; font-family: 'Times New Roman',Times,STIXGeneral,serif; white-space: nowrap; border-collapse: collapse}
.MJXp-display {display: block; text-align: center; margin: 1em 0}
.MJXp-math span {display: inline-block}
.MJXp-box {display: block!important; text-align: center}
.MJXp-box:after {content: " "}
.MJXp-rule {display: block!important; margin-top: .1em}
.MJXp-char {display: block!important}
.MJXp-mo {margin: 0 .15em}
.MJXp-mfrac {margin: 0 .125em; vertical-align: .25em}
.MJXp-denom {display: inline-table!important; width: 100%}
.MJXp-denom > * {display: table-row!important}
.MJXp-surd {vertical-align: top}
.MJXp-surd > * {display: block!important}
.MJXp-script-box > *  {display: table!important; height: 50%}
.MJXp-script-box > * > * {display: table-cell!important; vertical-align: top}
.MJXp-script-box > *:last-child > * {vertical-align: bottom}
.MJXp-script-box > * > * > * {display: block!important}
.MJXp-mphantom {visibility: hidden}
.MJXp-munderover, .MJXp-munder {display: inline-table!important}
.MJXp-over {display: inline-block!important; text-align: center}
.MJXp-over > * {display: block!important}
.MJXp-munderover > *, .MJXp-munder > * {display: table-row!important}
.MJXp-mtable {vertical-align: .25em; margin: 0 .125em}
.MJXp-mtable > * {display: inline-table!important; vertical-align: middle}
.MJXp-mtr {display: table-row!important}
.MJXp-mtd {display: table-cell!important; text-align: center; padding: .5em 0 0 .5em}
.MJXp-mtr > .MJXp-mtd:first-child {padding-left: 0}
.MJXp-mtr:first-child > .MJXp-mtd {padding-top: 0}
.MJXp-mlabeledtr {display: table-row!important}
.MJXp-mlabeledtr > .MJXp-mtd:first-child {padding-left: 0}
.MJXp-mlabeledtr:first-child > .MJXp-mtd {padding-top: 0}
.MJXp-merror {background-color: #FFFF88; color: #CC0000; border: 1px solid #CC0000; padding: 1px 3px; font-style: normal; font-size: 90%}
.MJXp-scale0 {-webkit-transform: scaleX(.0); -moz-transform: scaleX(.0); -ms-transform: scaleX(.0); -o-transform: scaleX(.0); transform: scaleX(.0)}
.MJXp-scale1 {-webkit-transform: scaleX(.1); -moz-transform: scaleX(.1); -ms-transform: scaleX(.1); -o-transform: scaleX(.1); transform: scaleX(.1)}
.MJXp-scale2 {-webkit-transform: scaleX(.2); -moz-transform: scaleX(.2); -ms-transform: scaleX(.2); -o-transform: scaleX(.2); transform: scaleX(.2)}
.MJXp-scale3 {-webkit-transform: scaleX(.3); -moz-transform: scaleX(.3); -ms-transform: scaleX(.3); -o-transform: scaleX(.3); transform: scaleX(.3)}
.MJXp-scale4 {-webkit-transform: scaleX(.4); -moz-transform: scaleX(.4); -ms-transform: scaleX(.4); -o-transform: scaleX(.4); transform: scaleX(.4)}
.MJXp-scale5 {-webkit-transform: scaleX(.5); -moz-transform: scaleX(.5); -ms-transform: scaleX(.5); -o-transform: scaleX(.5); transform: scaleX(.5)}
.MJXp-scale6 {-webkit-transform: scaleX(.6); -moz-transform: scaleX(.6); -ms-transform: scaleX(.6); -o-transform: scaleX(.6); transform: scaleX(.6)}
.MJXp-scale7 {-webkit-transform: scaleX(.7); -moz-transform: scaleX(.7); -ms-transform: scaleX(.7); -o-transform: scaleX(.7); transform: scaleX(.7)}
.MJXp-scale8 {-webkit-transform: scaleX(.8); -moz-transform: scaleX(.8); -ms-transform: scaleX(.8); -o-transform: scaleX(.8); transform: scaleX(.8)}
.MJXp-scale9 {-webkit-transform: scaleX(.9); -moz-transform: scaleX(.9); -ms-transform: scaleX(.9); -o-transform: scaleX(.9); transform: scaleX(.9)}
.MathJax_PHTML .noError {vertical-align: ; font-size: 90%; text-align: left; color: black; padding: 1px 3px; border: 1px solid}
`}</style>
      </Helmet>
  );
}

export default Head;