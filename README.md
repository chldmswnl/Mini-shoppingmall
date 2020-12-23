# Mini shopping mall

### Programming languages that I used for this project

- HTML
- CSS
- Javascript

> Main functions

- Searching for clothes by its' attributes such as type and color.

> What I've learned

- How to fetch data from JSON file.

```
    return fetch('data/data.json')
    .then(res=>res.json())
    .then(json=>json.items);

```

- Dataset

```
    const dataset=event.target.dataset;
    const key=dataset.key;
    const value=dataset.value;
```

#### This is for getting information from HTML.

```
<button class="btn colorBtn blue" data-key="color" data-value="blue">Blue</button>
```
