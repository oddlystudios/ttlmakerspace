/**
 * Foundation for Sites by ZURB
 * Version 6.6.1
 * foundation.zurb.com
 * Licensed under MIT Open Source
 */
/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */

import { createGlobalStyle } from "styled-components"

const FoundationCSS = createGlobalStyle`
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%; }

body {
  margin: 0; }

h1 {
  font-size: 2em;
  margin: 0.67em 0; }

hr {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  height: 0;
  overflow: visible; }

pre {
  font-family: monospace, monospace;
  font-size: 1em; }

a {
  background-color: transparent; }

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted; }

b,
strong {
  font-weight: bolder; }

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em; }

small {
  font-size: 80%; }

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline; }

sub {
  bottom: -0.25em; }

sup {
  top: -0.5em; }

img {
  border-style: none; }

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0; }

button,
input {
  overflow: visible; }

button,
select {
  text-transform: none; }

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; }

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0; }

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText; }

fieldset {
  padding: 0.35em 0.75em 0.625em; }

legend {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal; }

progress {
  vertical-align: baseline; }

textarea {
  overflow: auto; }

[type="checkbox"],
[type="radio"] {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0; }

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto; }

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px; }

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; }

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit; }

details {
  display: block; }

summary {
  display: list-item; }

template {
  display: none; }

[hidden] {
  display: none; }

.foundation-mq {
  font-family: "small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em"; }

html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-size: 100%; }

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit; }

body {
  margin: 0;
  padding: 0;
  background: #fefefe;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  font-weight: normal;
  line-height: 1.5;
  color: #0a0a0a;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

img {
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  -ms-interpolation-mode: bicubic; }

textarea {
  height: auto;
  min-height: 50px;
  border-radius: 3px; }

select {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  width: 100%;
  border-radius: 3px; }

.map_canvas img,
.map_canvas embed,
.map_canvas object,
.mqa-display img,
.mqa-display embed,
.mqa-display object {
  max-width: none !important; }

button {
  padding: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 0;
  border-radius: 3px;
  background: transparent;
  line-height: 1;
  cursor: auto; }
  [data-whatinput='mouse'] button {
    outline: 0; }

pre {
  overflow: auto; }

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; }

.is-visible {
  display: block !important; }

.is-hidden {
  display: none !important; }

.float-left {
  float: left !important; }

.float-right {
  float: right !important; }

.float-center {
  display: block;
  margin-right: auto;
  margin-left: auto; }

.clearfix::before, .clearfix::after {
  display: table;
  content: ' ';
  -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
          flex-basis: 0;
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
      -ms-flex-order: 1;
          order: 1; }

.clearfix::after {
  clear: both; }

.hide {
  display: none !important; }

.invisible {
  visibility: hidden; }

@media print, screen and (max-width: 39.99875em) {
  .hide-for-small-only {
    display: none !important; } }

@media screen and (max-width: 0em), screen and (min-width: 40em) {
  .show-for-small-only {
    display: none !important; } }

@media print, screen and (min-width: 40em) {
  .hide-for-medium {
    display: none !important; } }

@media screen and (max-width: 39.99875em) {
  .show-for-medium {
    display: none !important; } }

@media print, screen and (min-width: 40em) and (max-width: 63.99875em) {
  .hide-for-medium-only {
    display: none !important; } }

@media screen and (max-width: 39.99875em), screen and (min-width: 64em) {
  .show-for-medium-only {
    display: none !important; } }

@media print, screen and (min-width: 64em) {
  .hide-for-large {
    display: none !important; } }

@media screen and (max-width: 63.99875em) {
  .show-for-large {
    display: none !important; } }

@media print, screen and (min-width: 64em) and (max-width: 74.99875em) {
  .hide-for-large-only {
    display: none !important; } }

@media screen and (max-width: 63.99875em), screen and (min-width: 75em) {
  .show-for-large-only {
    display: none !important; } }

.show-for-sr,
.show-on-focus {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important; }

.show-on-focus:active, .show-on-focus:focus {
  position: static !important;
  width: auto !important;
  height: auto !important;
  overflow: visible !important;
  clip: auto !important;
  white-space: normal !important; }

.show-for-landscape,
.hide-for-portrait {
  display: block !important; }
  @media screen and (orientation: landscape) {
    .show-for-landscape,
    .hide-for-portrait {
      display: block !important; } }
  @media screen and (orientation: portrait) {
    .show-for-landscape,
    .hide-for-portrait {
      display: none !important; } }

.hide-for-landscape,
.show-for-portrait {
  display: none !important; }
  @media screen and (orientation: landscape) {
    .hide-for-landscape,
    .show-for-portrait {
      display: none !important; } }
  @media screen and (orientation: portrait) {
    .hide-for-landscape,
    .show-for-portrait {
      display: block !important; } }

.grid-container {
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto; }
  .grid-container.fluid {
    padding-right: 0.9375rem;
    padding-left: 0.9375rem;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto; }
  .grid-container.full {
    padding-right: 0;
    padding-left: 0;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto; }

.grid-x {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-flow: row wrap;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap; }

.cell {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  min-height: 0px;
  min-width: 0px;
  width: 100%; }
  .cell.auto {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0px;
        -ms-flex: 1 1 0px;
            flex: 1 1 0px; }
  .cell.shrink {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto; }

.grid-x > .auto {
  width: auto; }

.grid-x > .shrink {
  width: auto; }

.grid-x > .small-shrink, .grid-x > .small-full, .grid-x > .small-1, .grid-x > .small-2, .grid-x > .small-3, .grid-x > .small-4, .grid-x > .small-5, .grid-x > .small-6, .grid-x > .small-7, .grid-x > .small-8, .grid-x > .small-9, .grid-x > .small-10, .grid-x > .small-11, .grid-x > .small-12 {
  -webkit-flex-basis: auto;
      -ms-flex-preferred-size: auto;
          flex-basis: auto; }

@media print, screen and (min-width: 40em) {
  .grid-x > .medium-shrink, .grid-x > .medium-full, .grid-x > .medium-1, .grid-x > .medium-2, .grid-x > .medium-3, .grid-x > .medium-4, .grid-x > .medium-5, .grid-x > .medium-6, .grid-x > .medium-7, .grid-x > .medium-8, .grid-x > .medium-9, .grid-x > .medium-10, .grid-x > .medium-11, .grid-x > .medium-12 {
    -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
            flex-basis: auto; } }

@media print, screen and (min-width: 64em) {
  .grid-x > .large-shrink, .grid-x > .large-full, .grid-x > .large-1, .grid-x > .large-2, .grid-x > .large-3, .grid-x > .large-4, .grid-x > .large-5, .grid-x > .large-6, .grid-x > .large-7, .grid-x > .large-8, .grid-x > .large-9, .grid-x > .large-10, .grid-x > .large-11, .grid-x > .large-12 {
    -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
            flex-basis: auto; } }

.grid-x > .small-1, .grid-x > .small-2, .grid-x > .small-3, .grid-x > .small-4, .grid-x > .small-5, .grid-x > .small-6, .grid-x > .small-7, .grid-x > .small-8, .grid-x > .small-9, .grid-x > .small-10, .grid-x > .small-11, .grid-x > .small-12 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto; }

.grid-x > .small-1 {
  width: 8.33333%; }

.grid-x > .small-2 {
  width: 16.66667%; }

.grid-x > .small-3 {
  width: 25%; }

.grid-x > .small-4 {
  width: 33.33333%; }

.grid-x > .small-5 {
  width: 41.66667%; }

.grid-x > .small-6 {
  width: 50%; }

.grid-x > .small-7 {
  width: 58.33333%; }

.grid-x > .small-8 {
  width: 66.66667%; }

.grid-x > .small-9 {
  width: 75%; }

.grid-x > .small-10 {
  width: 83.33333%; }

.grid-x > .small-11 {
  width: 91.66667%; }

.grid-x > .small-12 {
  width: 100%; }

@media print, screen and (min-width: 40em) {
  .grid-x > .medium-auto {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0px;
        -ms-flex: 1 1 0px;
            flex: 1 1 0px;
    width: auto; }
  .grid-x > .medium-shrink, .grid-x > .medium-1, .grid-x > .medium-2, .grid-x > .medium-3, .grid-x > .medium-4, .grid-x > .medium-5, .grid-x > .medium-6, .grid-x > .medium-7, .grid-x > .medium-8, .grid-x > .medium-9, .grid-x > .medium-10, .grid-x > .medium-11, .grid-x > .medium-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto; }
  .grid-x > .medium-shrink {
    width: auto; }
  .grid-x > .medium-1 {
    width: 8.33333%; }
  .grid-x > .medium-2 {
    width: 16.66667%; }
  .grid-x > .medium-3 {
    width: 25%; }
  .grid-x > .medium-4 {
    width: 33.33333%; }
  .grid-x > .medium-5 {
    width: 41.66667%; }
  .grid-x > .medium-6 {
    width: 50%; }
  .grid-x > .medium-7 {
    width: 58.33333%; }
  .grid-x > .medium-8 {
    width: 66.66667%; }
  .grid-x > .medium-9 {
    width: 75%; }
  .grid-x > .medium-10 {
    width: 83.33333%; }
  .grid-x > .medium-11 {
    width: 91.66667%; }
  .grid-x > .medium-12 {
    width: 100%; } }

@media print, screen and (min-width: 64em) {
  .grid-x > .large-auto {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0px;
        -ms-flex: 1 1 0px;
            flex: 1 1 0px;
    width: auto; }
  .grid-x > .large-shrink, .grid-x > .large-1, .grid-x > .large-2, .grid-x > .large-3, .grid-x > .large-4, .grid-x > .large-5, .grid-x > .large-6, .grid-x > .large-7, .grid-x > .large-8, .grid-x > .large-9, .grid-x > .large-10, .grid-x > .large-11, .grid-x > .large-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto; }
  .grid-x > .large-shrink {
    width: auto; }
  .grid-x > .large-1 {
    width: 8.33333%; }
  .grid-x > .large-2 {
    width: 16.66667%; }
  .grid-x > .large-3 {
    width: 25%; }
  .grid-x > .large-4 {
    width: 33.33333%; }
  .grid-x > .large-5 {
    width: 41.66667%; }
  .grid-x > .large-6 {
    width: 50%; }
  .grid-x > .large-7 {
    width: 58.33333%; }
  .grid-x > .large-8 {
    width: 66.66667%; }
  .grid-x > .large-9 {
    width: 75%; }
  .grid-x > .large-10 {
    width: 83.33333%; }
  .grid-x > .large-11 {
    width: 91.66667%; }
  .grid-x > .large-12 {
    width: 100%; } }

.grid-margin-x:not(.grid-x) > .cell {
  width: auto; }

.grid-margin-y:not(.grid-y) > .cell {
  height: auto; }

.grid-margin-x {
  margin-left: -0.9375rem;
  margin-right: -0.9375rem; }
  .grid-margin-x > .cell {
    width: calc(100% - 1.875rem);
    margin-left: 0.9375rem;
    margin-right: 0.9375rem; }
  .grid-margin-x > .auto {
    width: auto; }
  .grid-margin-x > .shrink {
    width: auto; }
  .grid-margin-x > .small-1 {
    width: calc(8.33333% - 1.875rem); }
  .grid-margin-x > .small-2 {
    width: calc(16.66667% - 1.875rem); }
  .grid-margin-x > .small-3 {
    width: calc(25% - 1.875rem); }
  .grid-margin-x > .small-4 {
    width: calc(33.33333% - 1.875rem); }
  .grid-margin-x > .small-5 {
    width: calc(41.66667% - 1.875rem); }
  .grid-margin-x > .small-6 {
    width: calc(50% - 1.875rem); }
  .grid-margin-x > .small-7 {
    width: calc(58.33333% - 1.875rem); }
  .grid-margin-x > .small-8 {
    width: calc(66.66667% - 1.875rem); }
  .grid-margin-x > .small-9 {
    width: calc(75% - 1.875rem); }
  .grid-margin-x > .small-10 {
    width: calc(83.33333% - 1.875rem); }
  .grid-margin-x > .small-11 {
    width: calc(91.66667% - 1.875rem); }
  .grid-margin-x > .small-12 {
    width: calc(100% - 1.875rem); }
  @media print, screen and (min-width: 40em) {
    .grid-margin-x > .medium-auto {
      width: auto; }
    .grid-margin-x > .medium-shrink {
      width: auto; }
    .grid-margin-x > .medium-1 {
      width: calc(8.33333% - 1.875rem); }
    .grid-margin-x > .medium-2 {
      width: calc(16.66667% - 1.875rem); }
    .grid-margin-x > .medium-3 {
      width: calc(25% - 1.875rem); }
    .grid-margin-x > .medium-4 {
      width: calc(33.33333% - 1.875rem); }
    .grid-margin-x > .medium-5 {
      width: calc(41.66667% - 1.875rem); }
    .grid-margin-x > .medium-6 {
      width: calc(50% - 1.875rem); }
    .grid-margin-x > .medium-7 {
      width: calc(58.33333% - 1.875rem); }
    .grid-margin-x > .medium-8 {
      width: calc(66.66667% - 1.875rem); }
    .grid-margin-x > .medium-9 {
      width: calc(75% - 1.875rem); }
    .grid-margin-x > .medium-10 {
      width: calc(83.33333% - 1.875rem); }
    .grid-margin-x > .medium-11 {
      width: calc(91.66667% - 1.875rem); }
    .grid-margin-x > .medium-12 {
      width: calc(100% - 1.875rem); } }
  @media print, screen and (min-width: 64em) {
    .grid-margin-x > .large-auto {
      width: auto; }
    .grid-margin-x > .large-shrink {
      width: auto; }
    .grid-margin-x > .large-1 {
      width: calc(8.33333% - 1.875rem); }
    .grid-margin-x > .large-2 {
      width: calc(16.66667% - 1.875rem); }
    .grid-margin-x > .large-3 {
      width: calc(25% - 1.875rem); }
    .grid-margin-x > .large-4 {
      width: calc(33.33333% - 1.875rem); }
    .grid-margin-x > .large-5 {
      width: calc(41.66667% - 1.875rem); }
    .grid-margin-x > .large-6 {
      width: calc(50% - 1.875rem); }
    .grid-margin-x > .large-7 {
      width: calc(58.33333% - 1.875rem); }
    .grid-margin-x > .large-8 {
      width: calc(66.66667% - 1.875rem); }
    .grid-margin-x > .large-9 {
      width: calc(75% - 1.875rem); }
    .grid-margin-x > .large-10 {
      width: calc(83.33333% - 1.875rem); }
    .grid-margin-x > .large-11 {
      width: calc(91.66667% - 1.875rem); }
    .grid-margin-x > .large-12 {
      width: calc(100% - 1.875rem); } }

.grid-padding-x .grid-padding-x {
  margin-right: -0.9375rem;
  margin-left: -0.9375rem; }

.grid-container:not(.full) > .grid-padding-x {
  margin-right: -0.9375rem;
  margin-left: -0.9375rem; }

.grid-padding-x > .cell {
  padding-right: 0.9375rem;
  padding-left: 0.9375rem; }

.small-up-1 > .cell {
  width: 100%; }

.small-up-2 > .cell {
  width: 50%; }

.small-up-3 > .cell {
  width: 33.33333%; }

.small-up-4 > .cell {
  width: 25%; }

.small-up-5 > .cell {
  width: 20%; }

.small-up-6 > .cell {
  width: 16.66667%; }

.small-up-7 > .cell {
  width: 14.28571%; }

.small-up-8 > .cell {
  width: 12.5%; }

@media print, screen and (min-width: 40em) {
  .medium-up-1 > .cell {
    width: 100%; }
  .medium-up-2 > .cell {
    width: 50%; }
  .medium-up-3 > .cell {
    width: 33.33333%; }
  .medium-up-4 > .cell {
    width: 25%; }
  .medium-up-5 > .cell {
    width: 20%; }
  .medium-up-6 > .cell {
    width: 16.66667%; }
  .medium-up-7 > .cell {
    width: 14.28571%; }
  .medium-up-8 > .cell {
    width: 12.5%; } }

@media print, screen and (min-width: 64em) {
  .large-up-1 > .cell {
    width: 100%; }
  .large-up-2 > .cell {
    width: 50%; }
  .large-up-3 > .cell {
    width: 33.33333%; }
  .large-up-4 > .cell {
    width: 25%; }
  .large-up-5 > .cell {
    width: 20%; }
  .large-up-6 > .cell {
    width: 16.66667%; }
  .large-up-7 > .cell {
    width: 14.28571%; }
  .large-up-8 > .cell {
    width: 12.5%; } }

.grid-margin-x.small-up-1 > .cell {
  width: calc(100% - 1.875rem); }

.grid-margin-x.small-up-2 > .cell {
  width: calc(50% - 1.875rem); }

.grid-margin-x.small-up-3 > .cell {
  width: calc(33.33333% - 1.875rem); }

.grid-margin-x.small-up-4 > .cell {
  width: calc(25% - 1.875rem); }

.grid-margin-x.small-up-5 > .cell {
  width: calc(20% - 1.875rem); }

.grid-margin-x.small-up-6 > .cell {
  width: calc(16.66667% - 1.875rem); }

.grid-margin-x.small-up-7 > .cell {
  width: calc(14.28571% - 1.875rem); }

.grid-margin-x.small-up-8 > .cell {
  width: calc(12.5% - 1.875rem); }

@media print, screen and (min-width: 40em) {
  .grid-margin-x.medium-up-1 > .cell {
    width: calc(100% - 1.875rem); }
  .grid-margin-x.medium-up-2 > .cell {
    width: calc(50% - 1.875rem); }
  .grid-margin-x.medium-up-3 > .cell {
    width: calc(33.33333% - 1.875rem); }
  .grid-margin-x.medium-up-4 > .cell {
    width: calc(25% - 1.875rem); }
  .grid-margin-x.medium-up-5 > .cell {
    width: calc(20% - 1.875rem); }
  .grid-margin-x.medium-up-6 > .cell {
    width: calc(16.66667% - 1.875rem); }
  .grid-margin-x.medium-up-7 > .cell {
    width: calc(14.28571% - 1.875rem); }
  .grid-margin-x.medium-up-8 > .cell {
    width: calc(12.5% - 1.875rem); } }

@media print, screen and (min-width: 64em) {
  .grid-margin-x.large-up-1 > .cell {
    width: calc(100% - 1.875rem); }
  .grid-margin-x.large-up-2 > .cell {
    width: calc(50% - 1.875rem); }
  .grid-margin-x.large-up-3 > .cell {
    width: calc(33.33333% - 1.875rem); }
  .grid-margin-x.large-up-4 > .cell {
    width: calc(25% - 1.875rem); }
  .grid-margin-x.large-up-5 > .cell {
    width: calc(20% - 1.875rem); }
  .grid-margin-x.large-up-6 > .cell {
    width: calc(16.66667% - 1.875rem); }
  .grid-margin-x.large-up-7 > .cell {
    width: calc(14.28571% - 1.875rem); }
  .grid-margin-x.large-up-8 > .cell {
    width: calc(12.5% - 1.875rem); } }

.small-margin-collapse {
  margin-right: 0;
  margin-left: 0; }
  .small-margin-collapse > .cell {
    margin-right: 0;
    margin-left: 0; }
  .small-margin-collapse > .small-1 {
    width: 8.33333%; }
  .small-margin-collapse > .small-2 {
    width: 16.66667%; }
  .small-margin-collapse > .small-3 {
    width: 25%; }
  .small-margin-collapse > .small-4 {
    width: 33.33333%; }
  .small-margin-collapse > .small-5 {
    width: 41.66667%; }
  .small-margin-collapse > .small-6 {
    width: 50%; }
  .small-margin-collapse > .small-7 {
    width: 58.33333%; }
  .small-margin-collapse > .small-8 {
    width: 66.66667%; }
  .small-margin-collapse > .small-9 {
    width: 75%; }
  .small-margin-collapse > .small-10 {
    width: 83.33333%; }
  .small-margin-collapse > .small-11 {
    width: 91.66667%; }
  .small-margin-collapse > .small-12 {
    width: 100%; }
  @media print, screen and (min-width: 40em) {
    .small-margin-collapse > .medium-1 {
      width: 8.33333%; }
    .small-margin-collapse > .medium-2 {
      width: 16.66667%; }
    .small-margin-collapse > .medium-3 {
      width: 25%; }
    .small-margin-collapse > .medium-4 {
      width: 33.33333%; }
    .small-margin-collapse > .medium-5 {
      width: 41.66667%; }
    .small-margin-collapse > .medium-6 {
      width: 50%; }
    .small-margin-collapse > .medium-7 {
      width: 58.33333%; }
    .small-margin-collapse > .medium-8 {
      width: 66.66667%; }
    .small-margin-collapse > .medium-9 {
      width: 75%; }
    .small-margin-collapse > .medium-10 {
      width: 83.33333%; }
    .small-margin-collapse > .medium-11 {
      width: 91.66667%; }
    .small-margin-collapse > .medium-12 {
      width: 100%; } }
  @media print, screen and (min-width: 64em) {
    .small-margin-collapse > .large-1 {
      width: 8.33333%; }
    .small-margin-collapse > .large-2 {
      width: 16.66667%; }
    .small-margin-collapse > .large-3 {
      width: 25%; }
    .small-margin-collapse > .large-4 {
      width: 33.33333%; }
    .small-margin-collapse > .large-5 {
      width: 41.66667%; }
    .small-margin-collapse > .large-6 {
      width: 50%; }
    .small-margin-collapse > .large-7 {
      width: 58.33333%; }
    .small-margin-collapse > .large-8 {
      width: 66.66667%; }
    .small-margin-collapse > .large-9 {
      width: 75%; }
    .small-margin-collapse > .large-10 {
      width: 83.33333%; }
    .small-margin-collapse > .large-11 {
      width: 91.66667%; }
    .small-margin-collapse > .large-12 {
      width: 100%; } }

.small-padding-collapse {
  margin-right: 0;
  margin-left: 0; }
  .small-padding-collapse > .cell {
    padding-right: 0;
    padding-left: 0; }

@media print, screen and (min-width: 40em) {
  .medium-margin-collapse {
    margin-right: 0;
    margin-left: 0; }
    .medium-margin-collapse > .cell {
      margin-right: 0;
      margin-left: 0; } }

@media print, screen and (min-width: 40em) {
  .medium-margin-collapse > .small-1 {
    width: 8.33333%; }
  .medium-margin-collapse > .small-2 {
    width: 16.66667%; }
  .medium-margin-collapse > .small-3 {
    width: 25%; }
  .medium-margin-collapse > .small-4 {
    width: 33.33333%; }
  .medium-margin-collapse > .small-5 {
    width: 41.66667%; }
  .medium-margin-collapse > .small-6 {
    width: 50%; }
  .medium-margin-collapse > .small-7 {
    width: 58.33333%; }
  .medium-margin-collapse > .small-8 {
    width: 66.66667%; }
  .medium-margin-collapse > .small-9 {
    width: 75%; }
  .medium-margin-collapse > .small-10 {
    width: 83.33333%; }
  .medium-margin-collapse > .small-11 {
    width: 91.66667%; }
  .medium-margin-collapse > .small-12 {
    width: 100%; } }

@media print, screen and (min-width: 40em) {
  .medium-margin-collapse > .medium-1 {
    width: 8.33333%; }
  .medium-margin-collapse > .medium-2 {
    width: 16.66667%; }
  .medium-margin-collapse > .medium-3 {
    width: 25%; }
  .medium-margin-collapse > .medium-4 {
    width: 33.33333%; }
  .medium-margin-collapse > .medium-5 {
    width: 41.66667%; }
  .medium-margin-collapse > .medium-6 {
    width: 50%; }
  .medium-margin-collapse > .medium-7 {
    width: 58.33333%; }
  .medium-margin-collapse > .medium-8 {
    width: 66.66667%; }
  .medium-margin-collapse > .medium-9 {
    width: 75%; }
  .medium-margin-collapse > .medium-10 {
    width: 83.33333%; }
  .medium-margin-collapse > .medium-11 {
    width: 91.66667%; }
  .medium-margin-collapse > .medium-12 {
    width: 100%; } }

@media print, screen and (min-width: 64em) {
  .medium-margin-collapse > .large-1 {
    width: 8.33333%; }
  .medium-margin-collapse > .large-2 {
    width: 16.66667%; }
  .medium-margin-collapse > .large-3 {
    width: 25%; }
  .medium-margin-collapse > .large-4 {
    width: 33.33333%; }
  .medium-margin-collapse > .large-5 {
    width: 41.66667%; }
  .medium-margin-collapse > .large-6 {
    width: 50%; }
  .medium-margin-collapse > .large-7 {
    width: 58.33333%; }
  .medium-margin-collapse > .large-8 {
    width: 66.66667%; }
  .medium-margin-collapse > .large-9 {
    width: 75%; }
  .medium-margin-collapse > .large-10 {
    width: 83.33333%; }
  .medium-margin-collapse > .large-11 {
    width: 91.66667%; }
  .medium-margin-collapse > .large-12 {
    width: 100%; } }

@media print, screen and (min-width: 40em) {
  .medium-padding-collapse {
    margin-right: 0;
    margin-left: 0; }
    .medium-padding-collapse > .cell {
      padding-right: 0;
      padding-left: 0; } }

@media print, screen and (min-width: 64em) {
  .large-margin-collapse {
    margin-right: 0;
    margin-left: 0; }
    .large-margin-collapse > .cell {
      margin-right: 0;
      margin-left: 0; } }

@media print, screen and (min-width: 64em) {
  .large-margin-collapse > .small-1 {
    width: 8.33333%; }
  .large-margin-collapse > .small-2 {
    width: 16.66667%; }
  .large-margin-collapse > .small-3 {
    width: 25%; }
  .large-margin-collapse > .small-4 {
    width: 33.33333%; }
  .large-margin-collapse > .small-5 {
    width: 41.66667%; }
  .large-margin-collapse > .small-6 {
    width: 50%; }
  .large-margin-collapse > .small-7 {
    width: 58.33333%; }
  .large-margin-collapse > .small-8 {
    width: 66.66667%; }
  .large-margin-collapse > .small-9 {
    width: 75%; }
  .large-margin-collapse > .small-10 {
    width: 83.33333%; }
  .large-margin-collapse > .small-11 {
    width: 91.66667%; }
  .large-margin-collapse > .small-12 {
    width: 100%; } }

@media print, screen and (min-width: 64em) {
  .large-margin-collapse > .medium-1 {
    width: 8.33333%; }
  .large-margin-collapse > .medium-2 {
    width: 16.66667%; }
  .large-margin-collapse > .medium-3 {
    width: 25%; }
  .large-margin-collapse > .medium-4 {
    width: 33.33333%; }
  .large-margin-collapse > .medium-5 {
    width: 41.66667%; }
  .large-margin-collapse > .medium-6 {
    width: 50%; }
  .large-margin-collapse > .medium-7 {
    width: 58.33333%; }
  .large-margin-collapse > .medium-8 {
    width: 66.66667%; }
  .large-margin-collapse > .medium-9 {
    width: 75%; }
  .large-margin-collapse > .medium-10 {
    width: 83.33333%; }
  .large-margin-collapse > .medium-11 {
    width: 91.66667%; }
  .large-margin-collapse > .medium-12 {
    width: 100%; } }

@media print, screen and (min-width: 64em) {
  .large-margin-collapse > .large-1 {
    width: 8.33333%; }
  .large-margin-collapse > .large-2 {
    width: 16.66667%; }
  .large-margin-collapse > .large-3 {
    width: 25%; }
  .large-margin-collapse > .large-4 {
    width: 33.33333%; }
  .large-margin-collapse > .large-5 {
    width: 41.66667%; }
  .large-margin-collapse > .large-6 {
    width: 50%; }
  .large-margin-collapse > .large-7 {
    width: 58.33333%; }
  .large-margin-collapse > .large-8 {
    width: 66.66667%; }
  .large-margin-collapse > .large-9 {
    width: 75%; }
  .large-margin-collapse > .large-10 {
    width: 83.33333%; }
  .large-margin-collapse > .large-11 {
    width: 91.66667%; }
  .large-margin-collapse > .large-12 {
    width: 100%; } }

@media print, screen and (min-width: 64em) {
  .large-padding-collapse {
    margin-right: 0;
    margin-left: 0; }
    .large-padding-collapse > .cell {
      padding-right: 0;
      padding-left: 0; } }

.small-offset-0 {
  margin-left: 0%; }

.grid-margin-x > .small-offset-0 {
  margin-left: calc(0% + 0.9375rem); }

.small-offset-1 {
  margin-left: 8.33333%; }

.grid-margin-x > .small-offset-1 {
  margin-left: calc(8.33333% + 0.9375rem); }

.small-offset-2 {
  margin-left: 16.66667%; }

.grid-margin-x > .small-offset-2 {
  margin-left: calc(16.66667% + 0.9375rem); }

.small-offset-3 {
  margin-left: 25%; }

.grid-margin-x > .small-offset-3 {
  margin-left: calc(25% + 0.9375rem); }

.small-offset-4 {
  margin-left: 33.33333%; }

.grid-margin-x > .small-offset-4 {
  margin-left: calc(33.33333% + 0.9375rem); }

.small-offset-5 {
  margin-left: 41.66667%; }

.grid-margin-x > .small-offset-5 {
  margin-left: calc(41.66667% + 0.9375rem); }

.small-offset-6 {
  margin-left: 50%; }

.grid-margin-x > .small-offset-6 {
  margin-left: calc(50% + 0.9375rem); }

.small-offset-7 {
  margin-left: 58.33333%; }

.grid-margin-x > .small-offset-7 {
  margin-left: calc(58.33333% + 0.9375rem); }

.small-offset-8 {
  margin-left: 66.66667%; }

.grid-margin-x > .small-offset-8 {
  margin-left: calc(66.66667% + 0.9375rem); }

.small-offset-9 {
  margin-left: 75%; }

.grid-margin-x > .small-offset-9 {
  margin-left: calc(75% + 0.9375rem); }

.small-offset-10 {
  margin-left: 83.33333%; }

.grid-margin-x > .small-offset-10 {
  margin-left: calc(83.33333% + 0.9375rem); }

.small-offset-11 {
  margin-left: 91.66667%; }

.grid-margin-x > .small-offset-11 {
  margin-left: calc(91.66667% + 0.9375rem); }

@media print, screen and (min-width: 40em) {
  .medium-offset-0 {
    margin-left: 0%; }
  .grid-margin-x > .medium-offset-0 {
    margin-left: calc(0% + 0.9375rem); }
  .medium-offset-1 {
    margin-left: 8.33333%; }
  .grid-margin-x > .medium-offset-1 {
    margin-left: calc(8.33333% + 0.9375rem); }
  .medium-offset-2 {
    margin-left: 16.66667%; }
  .grid-margin-x > .medium-offset-2 {
    margin-left: calc(16.66667% + 0.9375rem); }
  .medium-offset-3 {
    margin-left: 25%; }
  .grid-margin-x > .medium-offset-3 {
    margin-left: calc(25% + 0.9375rem); }
  .medium-offset-4 {
    margin-left: 33.33333%; }
  .grid-margin-x > .medium-offset-4 {
    margin-left: calc(33.33333% + 0.9375rem); }
  .medium-offset-5 {
    margin-left: 41.66667%; }
  .grid-margin-x > .medium-offset-5 {
    margin-left: calc(41.66667% + 0.9375rem); }
  .medium-offset-6 {
    margin-left: 50%; }
  .grid-margin-x > .medium-offset-6 {
    margin-left: calc(50% + 0.9375rem); }
  .medium-offset-7 {
    margin-left: 58.33333%; }
  .grid-margin-x > .medium-offset-7 {
    margin-left: calc(58.33333% + 0.9375rem); }
  .medium-offset-8 {
    margin-left: 66.66667%; }
  .grid-margin-x > .medium-offset-8 {
    margin-left: calc(66.66667% + 0.9375rem); }
  .medium-offset-9 {
    margin-left: 75%; }
  .grid-margin-x > .medium-offset-9 {
    margin-left: calc(75% + 0.9375rem); }
  .medium-offset-10 {
    margin-left: 83.33333%; }
  .grid-margin-x > .medium-offset-10 {
    margin-left: calc(83.33333% + 0.9375rem); }
  .medium-offset-11 {
    margin-left: 91.66667%; }
  .grid-margin-x > .medium-offset-11 {
    margin-left: calc(91.66667% + 0.9375rem); } }

@media print, screen and (min-width: 64em) {
  .large-offset-0 {
    margin-left: 0%; }
  .grid-margin-x > .large-offset-0 {
    margin-left: calc(0% + 0.9375rem); }
  .large-offset-1 {
    margin-left: 8.33333%; }
  .grid-margin-x > .large-offset-1 {
    margin-left: calc(8.33333% + 0.9375rem); }
  .large-offset-2 {
    margin-left: 16.66667%; }
  .grid-margin-x > .large-offset-2 {
    margin-left: calc(16.66667% + 0.9375rem); }
  .large-offset-3 {
    margin-left: 25%; }
  .grid-margin-x > .large-offset-3 {
    margin-left: calc(25% + 0.9375rem); }
  .large-offset-4 {
    margin-left: 33.33333%; }
  .grid-margin-x > .large-offset-4 {
    margin-left: calc(33.33333% + 0.9375rem); }
  .large-offset-5 {
    margin-left: 41.66667%; }
  .grid-margin-x > .large-offset-5 {
    margin-left: calc(41.66667% + 0.9375rem); }
  .large-offset-6 {
    margin-left: 50%; }
  .grid-margin-x > .large-offset-6 {
    margin-left: calc(50% + 0.9375rem); }
  .large-offset-7 {
    margin-left: 58.33333%; }
  .grid-margin-x > .large-offset-7 {
    margin-left: calc(58.33333% + 0.9375rem); }
  .large-offset-8 {
    margin-left: 66.66667%; }
  .grid-margin-x > .large-offset-8 {
    margin-left: calc(66.66667% + 0.9375rem); }
  .large-offset-9 {
    margin-left: 75%; }
  .grid-margin-x > .large-offset-9 {
    margin-left: calc(75% + 0.9375rem); }
  .large-offset-10 {
    margin-left: 83.33333%; }
  .grid-margin-x > .large-offset-10 {
    margin-left: calc(83.33333% + 0.9375rem); }
  .large-offset-11 {
    margin-left: 91.66667%; }
  .grid-margin-x > .large-offset-11 {
    margin-left: calc(91.66667% + 0.9375rem); } }

.grid-y {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-flow: column nowrap;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap; }
  .grid-y > .cell {
    height: auto;
    max-height: none; }
  .grid-y > .auto {
    height: auto; }
  .grid-y > .shrink {
    height: auto; }
  .grid-y > .small-shrink, .grid-y > .small-full, .grid-y > .small-1, .grid-y > .small-2, .grid-y > .small-3, .grid-y > .small-4, .grid-y > .small-5, .grid-y > .small-6, .grid-y > .small-7, .grid-y > .small-8, .grid-y > .small-9, .grid-y > .small-10, .grid-y > .small-11, .grid-y > .small-12 {
    -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
            flex-basis: auto; }
  @media print, screen and (min-width: 40em) {
    .grid-y > .medium-shrink, .grid-y > .medium-full, .grid-y > .medium-1, .grid-y > .medium-2, .grid-y > .medium-3, .grid-y > .medium-4, .grid-y > .medium-5, .grid-y > .medium-6, .grid-y > .medium-7, .grid-y > .medium-8, .grid-y > .medium-9, .grid-y > .medium-10, .grid-y > .medium-11, .grid-y > .medium-12 {
      -webkit-flex-basis: auto;
          -ms-flex-preferred-size: auto;
              flex-basis: auto; } }
  @media print, screen and (min-width: 64em) {
    .grid-y > .large-shrink, .grid-y > .large-full, .grid-y > .large-1, .grid-y > .large-2, .grid-y > .large-3, .grid-y > .large-4, .grid-y > .large-5, .grid-y > .large-6, .grid-y > .large-7, .grid-y > .large-8, .grid-y > .large-9, .grid-y > .large-10, .grid-y > .large-11, .grid-y > .large-12 {
      -webkit-flex-basis: auto;
          -ms-flex-preferred-size: auto;
              flex-basis: auto; } }
  .grid-y > .small-1, .grid-y > .small-2, .grid-y > .small-3, .grid-y > .small-4, .grid-y > .small-5, .grid-y > .small-6, .grid-y > .small-7, .grid-y > .small-8, .grid-y > .small-9, .grid-y > .small-10, .grid-y > .small-11, .grid-y > .small-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto; }
  .grid-y > .small-1 {
    height: 8.33333%; }
  .grid-y > .small-2 {
    height: 16.66667%; }
  .grid-y > .small-3 {
    height: 25%; }
  .grid-y > .small-4 {
    height: 33.33333%; }
  .grid-y > .small-5 {
    height: 41.66667%; }
  .grid-y > .small-6 {
    height: 50%; }
  .grid-y > .small-7 {
    height: 58.33333%; }
  .grid-y > .small-8 {
    height: 66.66667%; }
  .grid-y > .small-9 {
    height: 75%; }
  .grid-y > .small-10 {
    height: 83.33333%; }
  .grid-y > .small-11 {
    height: 91.66667%; }
  .grid-y > .small-12 {
    height: 100%; }
  @media print, screen and (min-width: 40em) {
    .grid-y > .medium-auto {
      -webkit-box-flex: 1;
      -webkit-flex: 1 1 0px;
          -ms-flex: 1 1 0px;
              flex: 1 1 0px;
      height: auto; }
    .grid-y > .medium-shrink, .grid-y > .medium-1, .grid-y > .medium-2, .grid-y > .medium-3, .grid-y > .medium-4, .grid-y > .medium-5, .grid-y > .medium-6, .grid-y > .medium-7, .grid-y > .medium-8, .grid-y > .medium-9, .grid-y > .medium-10, .grid-y > .medium-11, .grid-y > .medium-12 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
          -ms-flex: 0 0 auto;
              flex: 0 0 auto; }
    .grid-y > .medium-shrink {
      height: auto; }
    .grid-y > .medium-1 {
      height: 8.33333%; }
    .grid-y > .medium-2 {
      height: 16.66667%; }
    .grid-y > .medium-3 {
      height: 25%; }
    .grid-y > .medium-4 {
      height: 33.33333%; }
    .grid-y > .medium-5 {
      height: 41.66667%; }
    .grid-y > .medium-6 {
      height: 50%; }
    .grid-y > .medium-7 {
      height: 58.33333%; }
    .grid-y > .medium-8 {
      height: 66.66667%; }
    .grid-y > .medium-9 {
      height: 75%; }
    .grid-y > .medium-10 {
      height: 83.33333%; }
    .grid-y > .medium-11 {
      height: 91.66667%; }
    .grid-y > .medium-12 {
      height: 100%; } }
  @media print, screen and (min-width: 64em) {
    .grid-y > .large-auto {
      -webkit-box-flex: 1;
      -webkit-flex: 1 1 0px;
          -ms-flex: 1 1 0px;
              flex: 1 1 0px;
      height: auto; }
    .grid-y > .large-shrink, .grid-y > .large-1, .grid-y > .large-2, .grid-y > .large-3, .grid-y > .large-4, .grid-y > .large-5, .grid-y > .large-6, .grid-y > .large-7, .grid-y > .large-8, .grid-y > .large-9, .grid-y > .large-10, .grid-y > .large-11, .grid-y > .large-12 {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
          -ms-flex: 0 0 auto;
              flex: 0 0 auto; }
    .grid-y > .large-shrink {
      height: auto; }
    .grid-y > .large-1 {
      height: 8.33333%; }
    .grid-y > .large-2 {
      height: 16.66667%; }
    .grid-y > .large-3 {
      height: 25%; }
    .grid-y > .large-4 {
      height: 33.33333%; }
    .grid-y > .large-5 {
      height: 41.66667%; }
    .grid-y > .large-6 {
      height: 50%; }
    .grid-y > .large-7 {
      height: 58.33333%; }
    .grid-y > .large-8 {
      height: 66.66667%; }
    .grid-y > .large-9 {
      height: 75%; }
    .grid-y > .large-10 {
      height: 83.33333%; }
    .grid-y > .large-11 {
      height: 91.66667%; }
    .grid-y > .large-12 {
      height: 100%; } }

.grid-padding-y .grid-padding-y {
  margin-top: -0.9375rem;
  margin-bottom: -0.9375rem; }

.grid-padding-y > .cell {
  padding-top: 0.9375rem;
  padding-bottom: 0.9375rem; }

.grid-margin-y {
  margin-top: -0.9375rem;
  margin-bottom: -0.9375rem; }
  .grid-margin-y > .cell {
    height: calc(100% - 1.875rem);
    margin-top: 0.9375rem;
    margin-bottom: 0.9375rem; }
  .grid-margin-y > .auto {
    height: auto; }
  .grid-margin-y > .shrink {
    height: auto; }
  .grid-margin-y > .small-1 {
    height: calc(8.33333% - 1.875rem); }
  .grid-margin-y > .small-2 {
    height: calc(16.66667% - 1.875rem); }
  .grid-margin-y > .small-3 {
    height: calc(25% - 1.875rem); }
  .grid-margin-y > .small-4 {
    height: calc(33.33333% - 1.875rem); }
  .grid-margin-y > .small-5 {
    height: calc(41.66667% - 1.875rem); }
  .grid-margin-y > .small-6 {
    height: calc(50% - 1.875rem); }
  .grid-margin-y > .small-7 {
    height: calc(58.33333% - 1.875rem); }
  .grid-margin-y > .small-8 {
    height: calc(66.66667% - 1.875rem); }
  .grid-margin-y > .small-9 {
    height: calc(75% - 1.875rem); }
  .grid-margin-y > .small-10 {
    height: calc(83.33333% - 1.875rem); }
  .grid-margin-y > .small-11 {
    height: calc(91.66667% - 1.875rem); }
  .grid-margin-y > .small-12 {
    height: calc(100% - 1.875rem); }
  @media print, screen and (min-width: 40em) {
    .grid-margin-y > .medium-auto {
      height: auto; }
    .grid-margin-y > .medium-shrink {
      height: auto; }
    .grid-margin-y > .medium-1 {
      height: calc(8.33333% - 1.875rem); }
    .grid-margin-y > .medium-2 {
      height: calc(16.66667% - 1.875rem); }
    .grid-margin-y > .medium-3 {
      height: calc(25% - 1.875rem); }
    .grid-margin-y > .medium-4 {
      height: calc(33.33333% - 1.875rem); }
    .grid-margin-y > .medium-5 {
      height: calc(41.66667% - 1.875rem); }
    .grid-margin-y > .medium-6 {
      height: calc(50% - 1.875rem); }
    .grid-margin-y > .medium-7 {
      height: calc(58.33333% - 1.875rem); }
    .grid-margin-y > .medium-8 {
      height: calc(66.66667% - 1.875rem); }
    .grid-margin-y > .medium-9 {
      height: calc(75% - 1.875rem); }
    .grid-margin-y > .medium-10 {
      height: calc(83.33333% - 1.875rem); }
    .grid-margin-y > .medium-11 {
      height: calc(91.66667% - 1.875rem); }
    .grid-margin-y > .medium-12 {
      height: calc(100% - 1.875rem); } }
  @media print, screen and (min-width: 64em) {
    .grid-margin-y > .large-auto {
      height: auto; }
    .grid-margin-y > .large-shrink {
      height: auto; }
    .grid-margin-y > .large-1 {
      height: calc(8.33333% - 1.875rem); }
    .grid-margin-y > .large-2 {
      height: calc(16.66667% - 1.875rem); }
    .grid-margin-y > .large-3 {
      height: calc(25% - 1.875rem); }
    .grid-margin-y > .large-4 {
      height: calc(33.33333% - 1.875rem); }
    .grid-margin-y > .large-5 {
      height: calc(41.66667% - 1.875rem); }
    .grid-margin-y > .large-6 {
      height: calc(50% - 1.875rem); }
    .grid-margin-y > .large-7 {
      height: calc(58.33333% - 1.875rem); }
    .grid-margin-y > .large-8 {
      height: calc(66.66667% - 1.875rem); }
    .grid-margin-y > .large-9 {
      height: calc(75% - 1.875rem); }
    .grid-margin-y > .large-10 {
      height: calc(83.33333% - 1.875rem); }
    .grid-margin-y > .large-11 {
      height: calc(91.66667% - 1.875rem); }
    .grid-margin-y > .large-12 {
      height: calc(100% - 1.875rem); } }

.grid-frame {
  overflow: hidden;
  position: relative;
  -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  width: 100vw; }

.cell .grid-frame {
  width: 100%; }

.cell-block {
  overflow-x: auto;
  max-width: 100%;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar; }

.cell-block-y {
  overflow-y: auto;
  max-height: 100%;
  min-height: 100%;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar; }

.cell-block-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  max-height: 100%; }
  .cell-block-container > .grid-x {
    max-height: 100%;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap; }

@media print, screen and (min-width: 40em) {
  .medium-grid-frame {
    overflow: hidden;
    position: relative;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    width: 100vw; }
  .cell .medium-grid-frame {
    width: 100%; }
  .medium-cell-block {
    overflow-x: auto;
    max-width: 100%;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar; }
  .medium-cell-block-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    max-height: 100%; }
    .medium-cell-block-container > .grid-x {
      max-height: 100%;
      -webkit-flex-wrap: nowrap;
          -ms-flex-wrap: nowrap;
              flex-wrap: nowrap; }
  .medium-cell-block-y {
    overflow-y: auto;
    max-height: 100%;
    min-height: 100%;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar; } }

@media print, screen and (min-width: 64em) {
  .large-grid-frame {
    overflow: hidden;
    position: relative;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    width: 100vw; }
  .cell .large-grid-frame {
    width: 100%; }
  .large-cell-block {
    overflow-x: auto;
    max-width: 100%;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar; }
  .large-cell-block-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    max-height: 100%; }
    .large-cell-block-container > .grid-x {
      max-height: 100%;
      -webkit-flex-wrap: nowrap;
          -ms-flex-wrap: nowrap;
              flex-wrap: nowrap; }
  .large-cell-block-y {
    overflow-y: auto;
    max-height: 100%;
    min-height: 100%;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar; } }

.grid-y.grid-frame {
  width: auto;
  overflow: hidden;
  position: relative;
  -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  height: 100vh; }

@media print, screen and (min-width: 40em) {
  .grid-y.medium-grid-frame {
    width: auto;
    overflow: hidden;
    position: relative;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    height: 100vh; } }

@media print, screen and (min-width: 64em) {
  .grid-y.large-grid-frame {
    width: auto;
    overflow: hidden;
    position: relative;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    height: 100vh; } }

.cell .grid-y.grid-frame {
  height: 100%; }

@media print, screen and (min-width: 40em) {
  .cell .grid-y.medium-grid-frame {
    height: 100%; } }

@media print, screen and (min-width: 64em) {
  .cell .grid-y.large-grid-frame {
    height: 100%; } }

.grid-margin-y {
  margin-top: -0.9375rem;
  margin-bottom: -0.9375rem; }
  .grid-margin-y > .cell {
    height: calc(100% - 1.875rem);
    margin-top: 0.9375rem;
    margin-bottom: 0.9375rem; }
  .grid-margin-y > .auto {
    height: auto; }
  .grid-margin-y > .shrink {
    height: auto; }
  .grid-margin-y > .small-1 {
    height: calc(8.33333% - 1.875rem); }
  .grid-margin-y > .small-2 {
    height: calc(16.66667% - 1.875rem); }
  .grid-margin-y > .small-3 {
    height: calc(25% - 1.875rem); }
  .grid-margin-y > .small-4 {
    height: calc(33.33333% - 1.875rem); }
  .grid-margin-y > .small-5 {
    height: calc(41.66667% - 1.875rem); }
  .grid-margin-y > .small-6 {
    height: calc(50% - 1.875rem); }
  .grid-margin-y > .small-7 {
    height: calc(58.33333% - 1.875rem); }
  .grid-margin-y > .small-8 {
    height: calc(66.66667% - 1.875rem); }
  .grid-margin-y > .small-9 {
    height: calc(75% - 1.875rem); }
  .grid-margin-y > .small-10 {
    height: calc(83.33333% - 1.875rem); }
  .grid-margin-y > .small-11 {
    height: calc(91.66667% - 1.875rem); }
  .grid-margin-y > .small-12 {
    height: calc(100% - 1.875rem); }
  @media print, screen and (min-width: 40em) {
    .grid-margin-y > .medium-auto {
      height: auto; }
    .grid-margin-y > .medium-shrink {
      height: auto; }
    .grid-margin-y > .medium-1 {
      height: calc(8.33333% - 1.875rem); }
    .grid-margin-y > .medium-2 {
      height: calc(16.66667% - 1.875rem); }
    .grid-margin-y > .medium-3 {
      height: calc(25% - 1.875rem); }
    .grid-margin-y > .medium-4 {
      height: calc(33.33333% - 1.875rem); }
    .grid-margin-y > .medium-5 {
      height: calc(41.66667% - 1.875rem); }
    .grid-margin-y > .medium-6 {
      height: calc(50% - 1.875rem); }
    .grid-margin-y > .medium-7 {
      height: calc(58.33333% - 1.875rem); }
    .grid-margin-y > .medium-8 {
      height: calc(66.66667% - 1.875rem); }
    .grid-margin-y > .medium-9 {
      height: calc(75% - 1.875rem); }
    .grid-margin-y > .medium-10 {
      height: calc(83.33333% - 1.875rem); }
    .grid-margin-y > .medium-11 {
      height: calc(91.66667% - 1.875rem); }
    .grid-margin-y > .medium-12 {
      height: calc(100% - 1.875rem); } }
  @media print, screen and (min-width: 64em) {
    .grid-margin-y > .large-auto {
      height: auto; }
    .grid-margin-y > .large-shrink {
      height: auto; }
    .grid-margin-y > .large-1 {
      height: calc(8.33333% - 1.875rem); }
    .grid-margin-y > .large-2 {
      height: calc(16.66667% - 1.875rem); }
    .grid-margin-y > .large-3 {
      height: calc(25% - 1.875rem); }
    .grid-margin-y > .large-4 {
      height: calc(33.33333% - 1.875rem); }
    .grid-margin-y > .large-5 {
      height: calc(41.66667% - 1.875rem); }
    .grid-margin-y > .large-6 {
      height: calc(50% - 1.875rem); }
    .grid-margin-y > .large-7 {
      height: calc(58.33333% - 1.875rem); }
    .grid-margin-y > .large-8 {
      height: calc(66.66667% - 1.875rem); }
    .grid-margin-y > .large-9 {
      height: calc(75% - 1.875rem); }
    .grid-margin-y > .large-10 {
      height: calc(83.33333% - 1.875rem); }
    .grid-margin-y > .large-11 {
      height: calc(91.66667% - 1.875rem); }
    .grid-margin-y > .large-12 {
      height: calc(100% - 1.875rem); } }

.grid-frame.grid-margin-y {
  height: calc(100vh + 1.875rem); }

@media print, screen and (min-width: 40em) {
  .grid-margin-y.medium-grid-frame {
    height: calc(100vh + 1.875rem); } }

@media print, screen and (min-width: 64em) {
  .grid-margin-y.large-grid-frame {
    height: calc(100vh + 1.875rem); } }

.align-left {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start; }

.align-right {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end; }

.align-center {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center; }

.align-justify {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between; }

.align-spaced {
  -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
          justify-content: space-around; }

.align-left.vertical.menu > li > a {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start; }

.align-right.vertical.menu > li > a {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end; }

.align-center.vertical.menu > li > a {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center; }

.align-top {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start; }

.align-self-top {
  -webkit-align-self: flex-start;
      -ms-flex-item-align: start;
          align-self: flex-start; }

.align-bottom {
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
      -ms-flex-align: end;
          align-items: flex-end; }

.align-self-bottom {
  -webkit-align-self: flex-end;
      -ms-flex-item-align: end;
          align-self: flex-end; }

.align-middle {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center; }

.align-self-middle {
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center; }

.align-stretch {
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch; }

.align-self-stretch {
  -webkit-align-self: stretch;
      -ms-flex-item-align: stretch;
          align-self: stretch; }

.align-center-middle {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-align-content: center;
      -ms-flex-line-pack: center;
          align-content: center; }

.small-order-1 {
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
      -ms-flex-order: 1;
          order: 1; }

.small-order-2 {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
      -ms-flex-order: 2;
          order: 2; }

.small-order-3 {
  -webkit-box-ordinal-group: 4;
  -webkit-order: 3;
      -ms-flex-order: 3;
          order: 3; }

.small-order-4 {
  -webkit-box-ordinal-group: 5;
  -webkit-order: 4;
      -ms-flex-order: 4;
          order: 4; }

.small-order-5 {
  -webkit-box-ordinal-group: 6;
  -webkit-order: 5;
      -ms-flex-order: 5;
          order: 5; }

.small-order-6 {
  -webkit-box-ordinal-group: 7;
  -webkit-order: 6;
      -ms-flex-order: 6;
          order: 6; }

@media print, screen and (min-width: 40em) {
  .medium-order-1 {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1; }
  .medium-order-2 {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2; }
  .medium-order-3 {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3; }
  .medium-order-4 {
    -webkit-box-ordinal-group: 5;
    -webkit-order: 4;
        -ms-flex-order: 4;
            order: 4; }
  .medium-order-5 {
    -webkit-box-ordinal-group: 6;
    -webkit-order: 5;
        -ms-flex-order: 5;
            order: 5; }
  .medium-order-6 {
    -webkit-box-ordinal-group: 7;
    -webkit-order: 6;
        -ms-flex-order: 6;
            order: 6; } }

@media print, screen and (min-width: 64em) {
  .large-order-1 {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1; }
  .large-order-2 {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2; }
  .large-order-3 {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3; }
  .large-order-4 {
    -webkit-box-ordinal-group: 5;
    -webkit-order: 4;
        -ms-flex-order: 4;
            order: 4; }
  .large-order-5 {
    -webkit-box-ordinal-group: 6;
    -webkit-order: 5;
        -ms-flex-order: 5;
            order: 5; }
  .large-order-6 {
    -webkit-box-ordinal-group: 7;
    -webkit-order: 6;
        -ms-flex-order: 6;
            order: 6; } }

.flex-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex; }

.flex-child-auto {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto; }

.flex-child-grow {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
      -ms-flex: 1 0 auto;
          flex: 1 0 auto; }

.flex-child-shrink {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
      -ms-flex: 0 1 auto;
          flex: 0 1 auto; }

.flex-dir-row {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row; }

.flex-dir-row-reverse {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: row-reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse; }

.flex-dir-column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }

.flex-dir-column-reverse {
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: column-reverse;
      -ms-flex-direction: column-reverse;
          flex-direction: column-reverse; }

@media print, screen and (min-width: 40em) {
  .medium-flex-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .medium-flex-child-auto {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto; }
  .medium-flex-child-grow {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto; }
  .medium-flex-child-shrink {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto; }
  .medium-flex-dir-row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; }
  .medium-flex-dir-row-reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
            flex-direction: row-reverse; }
  .medium-flex-dir-column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
  .medium-flex-dir-column-reverse {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse; } }

@media print, screen and (min-width: 64em) {
  .large-flex-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .large-flex-child-auto {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto; }
  .large-flex-child-grow {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto; }
  .large-flex-child-shrink {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto; }
  .large-flex-dir-row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; }
  .large-flex-dir-row-reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
            flex-direction: row-reverse; }
  .large-flex-dir-column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
  .large-flex-dir-column-reverse {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse; } }

.slide-in-down.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: translateY(-100%);
      -ms-transform: translateY(-100%);
          transform: translateY(-100%);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden; }

.slide-in-down.mui-enter.mui-enter-active {
  -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
          transform: translateY(0); }

.slide-in-left.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
          transform: translateX(-100%);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden; }

.slide-in-left.mui-enter.mui-enter-active {
  -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
          transform: translateX(0); }

.slide-in-up.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: translateY(100%);
      -ms-transform: translateY(100%);
          transform: translateY(100%);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden; }

.slide-in-up.mui-enter.mui-enter-active {
  -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
          transform: translateY(0); }

.slide-in-right.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: translateX(100%);
      -ms-transform: translateX(100%);
          transform: translateX(100%);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden; }

.slide-in-right.mui-enter.mui-enter-active {
  -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
          transform: translateX(0); }

.slide-out-down.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
          transform: translateY(0);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden; }

.slide-out-down.mui-leave.mui-leave-active {
  -webkit-transform: translateY(100%);
      -ms-transform: translateY(100%);
          transform: translateY(100%); }

.slide-out-right.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
          transform: translateX(0);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden; }

.slide-out-right.mui-leave.mui-leave-active {
  -webkit-transform: translateX(100%);
      -ms-transform: translateX(100%);
          transform: translateX(100%); }

.slide-out-up.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
          transform: translateY(0);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden; }

.slide-out-up.mui-leave.mui-leave-active {
  -webkit-transform: translateY(-100%);
      -ms-transform: translateY(-100%);
          transform: translateY(-100%); }

.slide-out-left.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
          transform: translateX(0);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden; }

.slide-out-left.mui-leave.mui-leave-active {
  -webkit-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
          transform: translateX(-100%); }

.fade-in.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  opacity: 0;
  -webkit-transition-property: opacity;
  transition-property: opacity; }

.fade-in.mui-enter.mui-enter-active {
  opacity: 1; }

.fade-out.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  opacity: 1;
  -webkit-transition-property: opacity;
  transition-property: opacity; }

.fade-out.mui-leave.mui-leave-active {
  opacity: 0; }

.hinge-in-from-top.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: perspective(2000px) rotateX(-90deg);
          transform: perspective(2000px) rotateX(-90deg);
  -webkit-transform-origin: top;
      -ms-transform-origin: top;
          transform-origin: top;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 0; }

.hinge-in-from-top.mui-enter.mui-enter-active {
  -webkit-transform: perspective(2000px) rotate(0deg);
          transform: perspective(2000px) rotate(0deg);
  opacity: 1; }

.hinge-in-from-right.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: perspective(2000px) rotateY(-90deg);
          transform: perspective(2000px) rotateY(-90deg);
  -webkit-transform-origin: right;
      -ms-transform-origin: right;
          transform-origin: right;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 0; }

.hinge-in-from-right.mui-enter.mui-enter-active {
  -webkit-transform: perspective(2000px) rotate(0deg);
          transform: perspective(2000px) rotate(0deg);
  opacity: 1; }

.hinge-in-from-bottom.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: perspective(2000px) rotateX(90deg);
          transform: perspective(2000px) rotateX(90deg);
  -webkit-transform-origin: bottom;
      -ms-transform-origin: bottom;
          transform-origin: bottom;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 0; }

.hinge-in-from-bottom.mui-enter.mui-enter-active {
  -webkit-transform: perspective(2000px) rotate(0deg);
          transform: perspective(2000px) rotate(0deg);
  opacity: 1; }

.hinge-in-from-left.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: perspective(2000px) rotateY(90deg);
          transform: perspective(2000px) rotateY(90deg);
  -webkit-transform-origin: left;
      -ms-transform-origin: left;
          transform-origin: left;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 0; }

.hinge-in-from-left.mui-enter.mui-enter-active {
  -webkit-transform: perspective(2000px) rotate(0deg);
          transform: perspective(2000px) rotate(0deg);
  opacity: 1; }

.hinge-in-from-middle-x.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: perspective(2000px) rotateX(-90deg);
          transform: perspective(2000px) rotateX(-90deg);
  -webkit-transform-origin: center;
      -ms-transform-origin: center;
          transform-origin: center;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 0; }

.hinge-in-from-middle-x.mui-enter.mui-enter-active {
  -webkit-transform: perspective(2000px) rotate(0deg);
          transform: perspective(2000px) rotate(0deg);
  opacity: 1; }

.hinge-in-from-middle-y.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: perspective(2000px) rotateY(-90deg);
          transform: perspective(2000px) rotateY(-90deg);
  -webkit-transform-origin: center;
      -ms-transform-origin: center;
          transform-origin: center;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 0; }

.hinge-in-from-middle-y.mui-enter.mui-enter-active {
  -webkit-transform: perspective(2000px) rotate(0deg);
          transform: perspective(2000px) rotate(0deg);
  opacity: 1; }

.hinge-out-from-top.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: perspective(2000px) rotate(0deg);
          transform: perspective(2000px) rotate(0deg);
  -webkit-transform-origin: top;
      -ms-transform-origin: top;
          transform-origin: top;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1; }

.hinge-out-from-top.mui-leave.mui-leave-active {
  -webkit-transform: perspective(2000px) rotateX(90deg);
          transform: perspective(2000px) rotateX(90deg);
  opacity: 0; }

.hinge-out-from-right.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: perspective(2000px) rotate(0deg);
          transform: perspective(2000px) rotate(0deg);
  -webkit-transform-origin: right;
      -ms-transform-origin: right;
          transform-origin: right;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1; }

.hinge-out-from-right.mui-leave.mui-leave-active {
  -webkit-transform: perspective(2000px) rotateY(90deg);
          transform: perspective(2000px) rotateY(90deg);
  opacity: 0; }

.hinge-out-from-bottom.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: perspective(2000px) rotate(0deg);
          transform: perspective(2000px) rotate(0deg);
  -webkit-transform-origin: bottom;
      -ms-transform-origin: bottom;
          transform-origin: bottom;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1; }

.hinge-out-from-bottom.mui-leave.mui-leave-active {
  -webkit-transform: perspective(2000px) rotateX(-90deg);
          transform: perspective(2000px) rotateX(-90deg);
  opacity: 0; }

.hinge-out-from-left.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: perspective(2000px) rotate(0deg);
          transform: perspective(2000px) rotate(0deg);
  -webkit-transform-origin: left;
      -ms-transform-origin: left;
          transform-origin: left;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1; }

.hinge-out-from-left.mui-leave.mui-leave-active {
  -webkit-transform: perspective(2000px) rotateY(-90deg);
          transform: perspective(2000px) rotateY(-90deg);
  opacity: 0; }

.hinge-out-from-middle-x.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: perspective(2000px) rotate(0deg);
          transform: perspective(2000px) rotate(0deg);
  -webkit-transform-origin: center;
      -ms-transform-origin: center;
          transform-origin: center;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1; }

.hinge-out-from-middle-x.mui-leave.mui-leave-active {
  -webkit-transform: perspective(2000px) rotateX(90deg);
          transform: perspective(2000px) rotateX(90deg);
  opacity: 0; }

.hinge-out-from-middle-y.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: perspective(2000px) rotate(0deg);
          transform: perspective(2000px) rotate(0deg);
  -webkit-transform-origin: center;
      -ms-transform-origin: center;
          transform-origin: center;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1; }

.hinge-out-from-middle-y.mui-leave.mui-leave-active {
  -webkit-transform: perspective(2000px) rotateY(90deg);
          transform: perspective(2000px) rotateY(90deg);
  opacity: 0; }

.scale-in-up.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: scale(0.5);
      -ms-transform: scale(0.5);
          transform: scale(0.5);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 0; }

.scale-in-up.mui-enter.mui-enter-active {
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
  opacity: 1; }

.scale-in-down.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: scale(1.5);
      -ms-transform: scale(1.5);
          transform: scale(1.5);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 0; }

.scale-in-down.mui-enter.mui-enter-active {
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
  opacity: 1; }

.scale-out-up.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1; }

.scale-out-up.mui-leave.mui-leave-active {
  -webkit-transform: scale(1.5);
      -ms-transform: scale(1.5);
          transform: scale(1.5);
  opacity: 0; }

.scale-out-down.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1; }

.scale-out-down.mui-leave.mui-leave-active {
  -webkit-transform: scale(0.5);
      -ms-transform: scale(0.5);
          transform: scale(0.5);
  opacity: 0; }

.spin-in.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: rotate(-0.75turn);
      -ms-transform: rotate(-0.75turn);
          transform: rotate(-0.75turn);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 0; }

.spin-in.mui-enter.mui-enter-active {
  -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
          transform: rotate(0);
  opacity: 1; }

.spin-out.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
          transform: rotate(0);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1; }

.spin-out.mui-leave.mui-leave-active {
  -webkit-transform: rotate(0.75turn);
      -ms-transform: rotate(0.75turn);
          transform: rotate(0.75turn);
  opacity: 0; }

.spin-in-ccw.mui-enter {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: rotate(0.75turn);
      -ms-transform: rotate(0.75turn);
          transform: rotate(0.75turn);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 0; }

.spin-in-ccw.mui-enter.mui-enter-active {
  -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
          transform: rotate(0);
  opacity: 1; }

.spin-out-ccw.mui-leave {
  -webkit-transition-duration: 500ms;
          transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
  -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
          transform: rotate(0);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1; }

.spin-out-ccw.mui-leave.mui-leave-active {
  -webkit-transform: rotate(-0.75turn);
      -ms-transform: rotate(-0.75turn);
          transform: rotate(-0.75turn);
  opacity: 0; }

.slow {
  -webkit-transition-duration: 750ms !important;
          transition-duration: 750ms !important; }

.fast {
  -webkit-transition-duration: 250ms !important;
          transition-duration: 250ms !important; }

.linear {
  -webkit-transition-timing-function: linear !important;
          transition-timing-function: linear !important; }

.ease {
  -webkit-transition-timing-function: ease !important;
          transition-timing-function: ease !important; }

.ease-in {
  -webkit-transition-timing-function: ease-in !important;
          transition-timing-function: ease-in !important; }

.ease-out {
  -webkit-transition-timing-function: ease-out !important;
          transition-timing-function: ease-out !important; }

.ease-in-out {
  -webkit-transition-timing-function: ease-in-out !important;
          transition-timing-function: ease-in-out !important; }

.bounce-in {
  -webkit-transition-timing-function: cubic-bezier(0.485, 0.155, 0.24, 1.245) !important;
          transition-timing-function: cubic-bezier(0.485, 0.155, 0.24, 1.245) !important; }

.bounce-out {
  -webkit-transition-timing-function: cubic-bezier(0.485, 0.155, 0.515, 0.845) !important;
          transition-timing-function: cubic-bezier(0.485, 0.155, 0.515, 0.845) !important; }

.bounce-in-out {
  -webkit-transition-timing-function: cubic-bezier(0.76, -0.245, 0.24, 1.245) !important;
          transition-timing-function: cubic-bezier(0.76, -0.245, 0.24, 1.245) !important; }

.short-delay {
  -webkit-transition-delay: 300ms !important;
          transition-delay: 300ms !important; }

.long-delay {
  -webkit-transition-delay: 700ms !important;
          transition-delay: 700ms !important; }

.shake {
  -webkit-animation-name: shake-7;
          animation-name: shake-7; }

@-webkit-keyframes shake-7 {
  0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90% {
    -webkit-transform: translateX(7%);
            transform: translateX(7%); }
  5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
    -webkit-transform: translateX(-7%);
            transform: translateX(-7%); } }

@keyframes shake-7 {
  0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90% {
    -webkit-transform: translateX(7%);
            transform: translateX(7%); }
  5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
    -webkit-transform: translateX(-7%);
            transform: translateX(-7%); } }

.spin-cw {
  -webkit-animation-name: spin-cw-1turn;
          animation-name: spin-cw-1turn; }

@-webkit-keyframes spin-cw-1turn {
  0% {
    -webkit-transform: rotate(-1turn);
            transform: rotate(-1turn); }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0); } }

@keyframes spin-cw-1turn {
  0% {
    -webkit-transform: rotate(-1turn);
            transform: rotate(-1turn); }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0); } }

.spin-ccw {
  -webkit-animation-name: spin-ccw-1turn;
          animation-name: spin-ccw-1turn; }

@-webkit-keyframes spin-ccw-1turn {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0); }
  100% {
    -webkit-transform: rotate(-1turn);
            transform: rotate(-1turn); } }

@keyframes spin-ccw-1turn {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0); }
  100% {
    -webkit-transform: rotate(-1turn);
            transform: rotate(-1turn); } }

.wiggle {
  -webkit-animation-name: wiggle-7deg;
          animation-name: wiggle-7deg; }

@-webkit-keyframes wiggle-7deg {
  40%, 50%, 60% {
    -webkit-transform: rotate(7deg);
            transform: rotate(7deg); }
  35%, 45%, 55%, 65% {
    -webkit-transform: rotate(-7deg);
            transform: rotate(-7deg); }
  0%, 30%, 70%, 100% {
    -webkit-transform: rotate(0);
            transform: rotate(0); } }

@keyframes wiggle-7deg {
  40%, 50%, 60% {
    -webkit-transform: rotate(7deg);
            transform: rotate(7deg); }
  35%, 45%, 55%, 65% {
    -webkit-transform: rotate(-7deg);
            transform: rotate(-7deg); }
  0%, 30%, 70%, 100% {
    -webkit-transform: rotate(0);
            transform: rotate(0); } }

.shake,
.spin-cw,
.spin-ccw,
.wiggle {
  -webkit-animation-duration: 500ms;
          animation-duration: 500ms; }

.infinite {
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite; }

.slow {
  -webkit-animation-duration: 750ms !important;
          animation-duration: 750ms !important; }

.fast {
  -webkit-animation-duration: 250ms !important;
          animation-duration: 250ms !important; }

.linear {
  -webkit-animation-timing-function: linear !important;
          animation-timing-function: linear !important; }

.ease {
  -webkit-animation-timing-function: ease !important;
          animation-timing-function: ease !important; }

.ease-in {
  -webkit-animation-timing-function: ease-in !important;
          animation-timing-function: ease-in !important; }

.ease-out {
  -webkit-animation-timing-function: ease-out !important;
          animation-timing-function: ease-out !important; }

.ease-in-out {
  -webkit-animation-timing-function: ease-in-out !important;
          animation-timing-function: ease-in-out !important; }

.bounce-in {
  -webkit-animation-timing-function: cubic-bezier(0.485, 0.155, 0.24, 1.245) !important;
          animation-timing-function: cubic-bezier(0.485, 0.155, 0.24, 1.245) !important; }

.bounce-out {
  -webkit-animation-timing-function: cubic-bezier(0.485, 0.155, 0.515, 0.845) !important;
          animation-timing-function: cubic-bezier(0.485, 0.155, 0.515, 0.845) !important; }

.bounce-in-out {
  -webkit-animation-timing-function: cubic-bezier(0.76, -0.245, 0.24, 1.245) !important;
          animation-timing-function: cubic-bezier(0.76, -0.245, 0.24, 1.245) !important; }

.short-delay {
  -webkit-animation-delay: 300ms !important;
          animation-delay: 300ms !important; }

.long-delay {
  -webkit-animation-delay: 700ms !important;
          animation-delay: 700ms !important; }
`
export default FoundationCSS
