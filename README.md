<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel and Vue Installation

- [Laravel +  Vue using Vite instruction](https://benjamincrozat.com/laravel-vue)
- [Youtube Tutorial](https://www.youtube.com/watch?v=Su8dWVrHdkc&ab_channel=CodeWithTony)

```bash
laravel new Laravel-Vue
cd Laravel-Vue
npm install
 ```
Install Vue.js in Laravel via NPM
```bash
npm install vue @vitejs/plugin-vue
 ```
Configure Vite for Vue.js in Laravel
In the previous step, we added a crucial plugin that enables support for Vue in Vite. We now must make use of it.

In vite.config.js, make the following modifications:
```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
});

```
Important: The alias from vue to vue.esm-bundler.js instructs Vite to use a version of Vue.js that also bundles the compiler which will allow us to write HTML instead of render() functions (thankfully!).


Initialize Vue.js
- Inside resources/js/app.js, initialize Vue by adding the following:

```js
import { createApp } from 'vue'

const app = createApp()

app.mount('#app')
```
