# ng-for-repeat
![Licence](https://badgen.net/badge/license/MIT/blue)
![NPM](https://badgen.net/npm/dw/ng-for-repeat)
![Size](https://badgen.net/bundlephobia/min/react)
![Last commit](https://badgen.net/github/last-commit/jornetsimon/ng-for-repeat)

🔁 A simple Angular directive to repeat an element. 

## Installation

```bash
npm install ng-for-repeat
```

Add `NgForRepeatModule` to your module imports :
``` typescript
import { NgForRepeatModule } from 'ng-for-repeat';

@NgModule({
    ...
    imports: [NgForRepeatModule],
})
export class AppModule {}

```

## Usage

```html
<div *ngForRepeat="3">
...
</div>
```

or

```html
<div *ngFor="let x repeat 3">
...
</div>
```
