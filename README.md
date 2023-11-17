# \<color-picker>
<img src="./demo/screenshot.png" width=600>

A weekend ramp up project to learn LIT basics. Maybe I can turn this into a shared npm if I can finish/polish (WCAG, best practices, etc.)

## Installation

```bash
npm i color-picker
```

## Usage

```html
<script type="module">
  import 'color-picker/color-picker.js';
  window.addEventListener('load', ()=>{
    const button = document.querySelector('input');
    const cp = document.querySelector('color-picker');
    cp.style.display = 'none';
    button.value = cp.color.hex;
    console.log({ cp })
    cp.addEventListener('preview', ({detail: {color}}) => {
      console.log({ preview: color, hex: color.hex, rgb: color.css });
      button.value = color.hex;
    });
    cp.addEventListener('picked', ({detail: {color}}) => {
      button.value = color.hex;
      cp.style.display = 'none';
    });
    button.addEventListener('click', (e)=>{
      e.stopImmediatePropagation();
      e.preventDefault();
      cp.style.display = 'block';
    });
  });
</script>

<label>
  Pick a color
  <input type='color' value='#000000'/>
</label>
<color-picker value="steelblue"></color-picker>

```

## Events
Fires a 'picked' (click OK) and 'preview' (any mutation) event with a color object in the event detail 

## Theming
Set the following css variables to set a custom theme:
```css
color-picker {
  --font-fam: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bg-color: rgb(30 41 59);
  --label-color: #ccc;
  --form-border-color: #495057;
  --input-active-border-color: #86b7fe;
  --input-bg: #020617;
  --input-active-bg: #4682B4;
  --input-color: #ccc;
  --input-active-color: #333;
  --input-active-box-shadow: 0 2px 5px #ccc;
  --button-active-bg: #0C5B9D;
  --button-active-color: white;
  --outer-box-shadow: 0 4px 12px #111;
}
```

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
