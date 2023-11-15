import {css} from 'lit';
export const transparentChex = css`height: 100%;
      width: 100%;
      position: absolute;
      z-index: -1;
      background: linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.125) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.125) 0, rgba(0, 0, 0, 0.125) 0), #fff;
      background-repeat: repeat, repeat;
      background-position: 0 0, 6px 6px;
      background-size: 12px 12px, 12px 12px;
`;

export const formControl = css`
  display: inline-block;
  width: 69px;
  padding: .325rem .5rem;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #ccc;
  appearance: none;
  background-color: #020617;
  background-clip: padding-box;
  border: 1px solid #495057;
  border-radius: 3px;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
`;
export const focusedFormControl = css`
  color: #333;
  background-color: rgb(148 163 184);
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 2px 5px #ccc;
`;

export const root = css`
    :host > .outer {
      --font-fam: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      position: relative;
      background-color: rgb(30 41 59);
      height: 250px;
      width: 400px;
      display: block;
      padding: 10px;
      margin: 10px;
      box-shadow: 0 4px 12px #111;
    }
    .d-flex {
      display: flex;
      width: 100%;
      margin-top: 15px;
    }
    .w-30 {
      width: 30%;
    }
    .w-40 {
      width: 40%;
      position: relative;
      height:210px;
    }
    :host .form-control {
      ${formControl}
    }
    :host .form-control:focus {
      ${focusedFormControl}
    }
    :host label {
      width: 12px;
      display: inline-block;
      color: #ccc;
      font-family: var(--font-fam);
    }
    :host .hsl-mode{
      padding-left:16px;
      margin-top:18px;
    }
    :host .button{
      padding: .325rem .5rem;
      background-color: #020617;
      border: 1px solid #495057;
      font-family: var(--font-fam);
      color:#ddd;
      cursor: pointer;
      font-size: .9rem;
    }
    :host div.hex{
      margin-top:27px;
      white-space: nowrap;
      position: relative;
    }
  :host dialog{
    opacity: 0;
    width:177px;
    position: absolute;
    bottom:30px;
    left:0px;
    z-index: 3;
    border: 1px solid transparent;
    outline:transparent;
    box-shadow: 0 4px 12px #111;
    background-color:  #020617;
    transition: opacity .3s;
  }
  :host dialog.open{
    opacity: 1;
  }

  /*:host dialog.closed{
    opacity: 0;
    transition: opacity .3s;
  }*/
  /*
  @keyframes show-dialog {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes hide-dialog{
    to {
      opacity: 0;
    }
  }*/
  :host dialog *{
    color:#ddd;
  }
  :host dialog a.copy-item{
    margin-bottom:5px;
    white-space: nowrap;
    display: block;
    width: 180px;
    cursor: pointer;
  }
  :host dialog input.form-control{
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
    width:132px;
    padding-bottom: 2px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    pointer-events: none;
  }
  :host dialog button.button{
    display: inline-block;
    vertical-align: middle;
    margin-left:-5px;
    font-size: 12px;
    height:27px;
    width:27px;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    box-sizing: border-box;
    overflow: hidden;
    outline:none;
    background-color: transparent;
  }
  :host dialog a.copy-item:hover .button,
  :host dialog a.copy-item:hover input.form-control,
  :host dialog a.copy-item:hover path{
    color:#111;
    background-color: steelblue;
    fill:#111;
    cursor: pointer;
  }
  :host dialog .button svg{
     height:15px;
     width:15px;
     margin-left:-3px;
   }
  :host div.hex input{
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      vertical-align: middle;
      display: inline-block;
    }
    :host .button.copy{
      padding:7px 7px 5px 4px;
      position:relative;
      border-left:0;
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      height:34px;
      display: inline-block;
      box-sizing: border-box;
      overflow: hidden;
      vertical-align: middle;
    }
    :host .button.copy svg{
      height:15px;
      width:15px;
    }
  :host .button.copy span{
    font-size: 10px;
    position:relative;
    top:-2px;
  }
    :host a.button.l{
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    :host a.button.r{
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
    :host a.button.active{
      color: #eee;
      background-color: #0C5B9D;
      cursor:default;
    }
    :host .ok{
      position:absolute;
      bottom:0;
      right:0;
    }
    :host .ok a{
      border-radius:3px;
      padding:6px 12px;
    }
    :host .swatch{
      height:14px;
      width:14px;
      display: inline-block;
      position:relative;
      top:2px;
      margin-left:3px;
    }
    :host .swatch span{
      position: absolute;
      z-index: 1;
      top:0;
      left:0;
      height:100%;
      width:100%;
    }
    :host .swatch span.checky{
      ${transparentChex}
      z-index: 0;
    }
  `
export const inputChannelRules = css`
  :host > div {
    margin-bottom: 8px;
    display: block;
    position: relative;
  }

  :host label {
    width: 12px;
    display: inline-block;
    color: #ccc;
    font-family: var(--font-fam);
  }

  :host .form-control {
    ${formControl}
  }

  :host .form-control:focus {
    ${focusedFormControl}
  }

  :host .preview-bar {
    height: 4px;
    width: 85px;
    position: absolute;
    bottom: 0px;
    right: 18px;
    --pct: 0;
    pointer-events: none;
    z-index: 2;
  }

  :host .preview-bar:after {
    position: absolute;
    content: '';
    background-image: var(--preview);
    height: 100%;
    width: 100%;
  }

  :host > div.active .preview-bar {
    width: 128px;
    bottom: -23px;
    right: -9px;
    height: 10px;
    border: 8px solid #020617;
    box-shadow: 0 2px 5px #ccc;
    pointer-events: all;
    z-index: 2;
    cursor: pointer;
  }

  :host .preview-bar .pct {
    bottom: -3px;
    margin-top: -.75px;
    position: absolute;
    width: 3px;
    height: 11px;
    background: 0 0;
    left: var(--pct);
    display: inline-block;
    z-index: 3;
    pointer-events: none;
  }

  :host .preview-bar .pct:before {
    content: "";
    height: 7px;
    width: 5px;
    position: absolute;
    left: -2.5px;
    top: 2.5px;
    background-color: #fff;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }

  :host .transparent-checks {
    ${transparentChex}
  }
`
