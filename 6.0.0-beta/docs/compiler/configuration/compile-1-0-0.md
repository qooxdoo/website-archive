# compile.json Schema Schema

```
https://raw.githubusercontent.com/qooxdoo/qooxdoo-compiler/master/source/resource/qx/tool/schema/compile-1-0-0.json
```

compile.json controls the qx compile command, and while you can use command line parameters to compile an application,
most applications will require one.

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             |            |

# compile.json Schema Properties

| Property                                      | Type       | Required     | Nullable | Defined by                        |
| --------------------------------------------- | ---------- | ------------ | -------- | --------------------------------- |
| [\$schema](#schema)                           | `enum`     | **Required** | No       | compile.json Schema (this schema) |
| [applications](#applications)                 | `object[]` | **Required** | No       | compile.json Schema (this schema) |
| [babel](#babel)                               | `object`   | Optional     | No       | compile.json Schema (this schema) |
| [babelOptions](#babeloptions)                 | `object`   | Optional     | No       | compile.json Schema (this schema) |
| [bundle](#bundle)                             | `object`   | Optional     | No       | compile.json Schema (this schema) |
| [defaultTarget](#defaulttarget)               | `string`   | Optional     | No       | compile.json Schema (this schema) |
| [environment](#environment)                   | `object`   | Optional     | No       | compile.json Schema (this schema) |
| [eslintConfig](#eslintconfig)                 | `object`   | Optional     | No       | compile.json Schema (this schema) |
| [exclude](#exclude)                           | `string[]` | Optional     | No       | compile.json Schema (this schema) |
| [i18nAsParts](#i18nasparts)                   | `boolean`  | Optional     | No       | compile.json Schema (this schema) |
| [ignores](#ignores)                           | `string[]` | Optional     | No       | compile.json Schema (this schema) |
| [include](#include)                           | `string[]` | Optional     | No       | compile.json Schema (this schema) |
| [jsx](#jsx)                                   | `object`   | Optional     | No       | compile.json Schema (this schema) |
| [libraries](#libraries)                       | `string[]` | Optional     | No       | compile.json Schema (this schema) |
| [locales](#locales)                           | `string[]` | Optional     | No       | compile.json Schema (this schema) |
| [parts](#parts)                               | `object`   | Optional     | No       | compile.json Schema (this schema) |
| [path-mappings](#path-mappings)               | `object`   | Optional     | No       | compile.json Schema (this schema) |
| [run](#run)                                   | `object`   | Optional     | No       | compile.json Schema (this schema) |
| [sass](#sass)                                 | `object`   | Optional     | No       | compile.json Schema (this schema) |
| [serve](#serve)                               | `object`   | Optional     | No       | compile.json Schema (this schema) |
| [targets](#targets)                           | `object[]` | **Required** | No       | compile.json Schema (this schema) |
| [writeAllTranslations](#writealltranslations) | `boolean`  | Optional     | No       | compile.json Schema (this schema) |

## \$schema

the json schema of the version of compile.json

`$schema`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#schema-known-values).

### \$schema Known Values

| Value                                                                                                                 | Description |
| --------------------------------------------------------------------------------------------------------------------- | ----------- |
| `https://www.qooxdoo.org/schema/compile-1-0-0.json`                                                                   |             |
| `https://raw.githubusercontent.com/qooxdoo/qooxdoo-compiler/master/source/resource/qx/tool/schema/compile-1-0-0.json` |             |
| `https://raw.githubusercontent.com/qooxdoo/qooxdoo-compiler/master/resource/schema/v1/compile.json`                   |             |

## applications

Each entry describes an application to be compiled.

`applications`

- is **required**
- type: `object[]`
- at least `1` items in the array
- defined in this schema

### applications Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property         | Type    | Required     | Default     |
| ---------------- | ------- | ------------ | ----------- |
| `bootPath`       | string  | Optional     | `"."`       |
| `class`          | string  | **Required** |             |
| `default`        | boolean | Optional     |             |
| `description`    | string  | Optional     |             |
| `environment`    |         | Optional     |             |
| `exclude`        | array   | Optional     |             |
| `include`        | array   | Optional     |             |
| `loaderTemplate` | string  | Optional     |             |
| `name`           | string  | **Required** |             |
| `outputPath`     | string  | Optional     |             |
| `parts`          |         | Optional     |             |
| `publish`        | boolean | Optional     | `true`      |
| `standalone`     | boolean | Optional     | `true`      |
| `theme`          | string  | Optional     |             |
| `title`          | string  | Optional     |             |
| `type`           |         | Optional     | `"browser"` |

#### bootPath

The URI used to access the application directory, i.e. the directory containing boot.js and resource.js

`bootPath`

- is optional
- type: `string`
- default: `"."`

##### bootPath Type

`string`

#### class

The class name of the main application class (it typically inherits from `qx.application.Standalone` for web
applications)

`class`

- is **required**
- type: `string`

##### class Type

`string`

#### default

If true, this application is considered the default when serving the application; if not provided then the first
browser app is the default application. When applications are generated, each application has it's own directory inside
the target directory and also has it's own index.html. However, there is an index.html which is generated in the target
output directory that runs the `default` application.

`default`

- is optional
- type: `boolean`

##### default Type

`boolean`

#### description

A description of what the application does. This information is displayed in the package browser.

`description`

- is optional
- type: `string`

##### description Type

`string`

#### environment

`environment`

- is optional
- type: reference

##### environment Type

- []() – `#/properties/environment`

#### exclude

An array of class names which are to be excluded from the application, regardless of whether the compiler thinks that
they are needed. Wildcards are supported by adding a \*. Note that exclude takes priority over include

`exclude`

- is optional
- type: `string[]`

##### exclude Type

Array type: `string[]`

All items must be of the type: `string`

##### exclude Example

```json
qx.util.format.NumberFormat
```

#### include

An array of class names which are to be included in the compilation, regardless of whether the compiler can detect if
they are needed (for example, your application dynamically choose class names on the fly). Wildcards are supported by
adding a \*.

`include`

- is optional
- type: `string[]`

##### include Type

Array type: `string[]`

All items must be of the type: `string`

##### include Example

```json
qx.util.format.*
```

#### loaderTemplate

The boot loader template file, usually determined automatically from the application type

`loaderTemplate`

- is optional
- type: `string`

##### loaderTemplate Type

`string`

#### name

An arbitrary, but unique, short name for the application. Should be filename and URL friendly - IE no spaces or special
characters

`name`

- is **required**
- type: `string`

##### name Type

`string`

#### outputPath

The directory to place the application files (e.g. boot.js and resource.js), relative to the target output directory

`outputPath`

- is optional
- type: `string`

##### outputPath Type

`string`

#### parts

`parts`

- is optional
- type: reference

##### parts Type

- []() – `#/properties/parts`

#### publish

Whether this application is to be shown in viewers like qooxdoo's package browser or not (if, e.g., it doesn't work as
a standalone demo or is an internal test app which is not for general consumption). Defaults to true.

`publish`

- is optional
- type: `boolean`
- default: `true`

##### publish Type

`boolean`

#### standalone

Whether this application can be opened in a browser on its own (true) or is part of a different application (false)

`standalone`

- is optional
- type: `boolean`
- default: `true`

##### standalone Type

`boolean`

#### theme

The theme class for the application

`theme`

- is optional
- type: `string`

##### theme Type

`string`

#### title

The human readable, customer facing name used to set the <title> tag of the application web page, i.e. in the
application's index.html

`title`

- is optional
- type: `string`

##### title Type

`string`

#### type

The type of application

`type`

- is optional
- type: complex
- default: `"browser"`

##### type Type

Unknown type ``.

```json
{
  "description": "The type of application",
  "pattern": "^(browser|node|rhino)$",
  "default": "browser",
  "simpletype": "complex"
}
```

## babel

`babel`

- is optional
- type: `object`
- defined in this schema

### babel Type

`object` with following properties:

| Property  | Type   | Required |
| --------- | ------ | -------- |
| `options` | object | Optional |
| `plugins` | object | Optional |

#### options

Options given to @babel/preset-env. With this options the output type of babel can be defined. For details see here:
<https://babeljs.io/docs/en/babel-preset-env#options>. They can be overridden per target.

`options`

- is optional
- type: `object`

##### options Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### plugins

List of additional babel plugins to enable, eg TC39 proposals; note that some proposals will work out of the box and
some will require upgrades to QxCompiler before they work properly - your mileage may vary. Each key in this object is
the NPM name of the plugin, and the value is either true (enabled), false (ignore), or an object which is options to
pass to the preset

`plugins`

- is optional
- type: `object`

##### plugins Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## babelOptions

\*\* DEPRECATED - See babel.options instead

`babelOptions`

- is optional
- type: `object`
- defined in this schema

### babelOptions Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## bundle

Allows you to use wildcards to select classes which are to be bundled together into as few files as possible

`bundle`

- is optional
- type: `object`
- defined in this schema

### bundle Type

`object` with following properties:

| Property  | Type         | Required |
| --------- | ------------ | -------- |
| `exclude` | array,string | Optional |
| `include` | array,string | Optional |

#### exclude

An array of namespaces to exclude from the bundle. Can contain wildcards.

`exclude`

- is optional
- type: multiple

##### exclude Type

Unknown type `array,string`.

```json
{
  "description": "An array of namespaces to exclude from the bundle. Can contain wildcards.",
  "type": ["array", "string"],
  "items": {
    "type": "string"
  },
  "simpletype": "multiple"
}
```

#### include

An array of namespaces to include in the bundle. Can contain wildcards.

`include`

- is optional
- type: multiple

##### include Type

Unknown type `array,string`.

```json
{
  "description": "An array of namespaces to include in the bundle. Can contain wildcards.",
  "type": ["array", "string"],
  "items": {
    "type": "string"
  },
  "simpletype": "multiple"
}
```

## defaultTarget

`defaultTarget`

- is optional
- type: `string`
- defined in this schema

### defaultTarget Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(build%7Csource)%24>)):

```regex
^(build|source)$
```

## environment

`environment`

- is optional
- type: `object`
- defined in this schema

### environment Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## eslintConfig

The syntax is the same as in in package.json. Explanation can be found here:
<https://eslint.org/docs/user-guide/configuring>

`eslintConfig`

- is optional
- type: `object`
- defined in this schema

### eslintConfig Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## exclude

An array of class names which are to be excluded from the application, regardless of whether the compiler thinks that
they are needed. Wildcards are supported by adding a \*. Note that exclude takes priority over include

`exclude`

- is optional
- type: `string[]`
- defined in this schema

### exclude Type

Array type: `string[]`

All items must be of the type: `string`

### exclude Example

```json
"qx.util.format.NumberFormat"
```

## i18nAsParts

Whether to store locales and translations as individual parts, which are manually loaded on demand by the application

`i18nAsParts`

- is optional
- type: `boolean`
- defined in this schema

### i18nAsParts Type

`boolean`

## ignores

An array of names which the compiler should ignore. Same as @ignore in source code

`ignores`

- is optional
- type: `string[]`
- defined in this schema

### ignores Type

Array type: `string[]`

All items must be of the type: `string`

### ignores Example

```json
"modules.*"
```

## include

An array of class names which are to be included in the compilation, regardless of whether the compiler can detect if
they are needed (for example, your application dynamically choose class names on the fly). Wildcards are supported by
adding a \*.

`include`

- is optional
- type: `string[]`
- defined in this schema

### include Type

Array type: `string[]`

All items must be of the type: `string`

### include Example

```json
"qx.util.format.*"
```

## jsx

Options given to @babel/preset-react to change how JSX HTML is transpiled

`jsx`

- is optional
- type: `object`
- defined in this schema

### jsx Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## libraries

If you don't specify a libraries key, then by default the current directory will be used (provided that there is a
Manifest.json file) as a library; this makes sense for most applications.

`libraries`

- is optional
- type: `string[]`
- defined in this schema

### libraries Type

Array type: `string[]`

All items must be of the type: `string`

## locales

Include other translations than 'en'

`locales`

- is optional
- type: `string[]`
- defined in this schema

### locales Type

Array type: `string[]`

All items must be of the type: `string`

## parts

Each part has an include array which is a list of classes (including wildcards) that are to be included.

`parts`

- is optional
- type: `object`
- defined in this schema

### parts Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## path-mappings

generic means to locate files on disk inside the URI address space of the application

`path-mappings`

- is optional
- type: `object`
- defined in this schema

### path-mappings Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


### path-mappings Example

```json
{
  "../qooxdoo": "/some/virtual/uri/path/qooxdoo"
}
```

## run

`run`

- is optional
- type: `object`
- defined in this schema

### run Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `application` | string | **Required** |
| `arguments`   | string | Optional     |

#### application

The name of the application, as specified in the applications[] array

`application`

- is **required**
- type: `string`

##### application Type

`string`

#### arguments

Optional command line arguments

`arguments`

- is optional
- type: `string`

##### arguments Type

`string`

## sass

`sass`

- is optional
- type: `object`
- defined in this schema

### sass Type

`object` with following properties:

| Property   | Type   | Required |
| ---------- | ------ | -------- |
| `compiler` | string | Optional |

#### compiler

Which SASS compiler to use (default is deprecated "legacy" during v6, will default to "latest" in v7)

`compiler`

- is optional
- type: `string`

##### compiler Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(legacy%7Clatest)%24>)):

```regex
^(legacy|latest)$
```

## serve

Configure the qx compilers built-in webserver

`serve`

- is optional
- type: `object`
- defined in this schema

### serve Type

`object` with following properties:

| Property     | Type    | Required |
| ------------ | ------- | -------- |
| `listenPort` | integer | Optional |

#### listenPort

`listenPort`

- is optional
- type: `integer`

##### listenPort Type

`integer`

## targets

`targets`

- is **required**
- type: `object[]`
- at least `1` items in the array
- defined in this schema

### targets Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property            | Type           | Required     |
| ------------------- | -------------- | ------------ |
| `addCreatedAt`      | boolean        | Optional     |
| `application-names` | array          | Optional     |
| `application-types` | array          | Optional     |
| `babelOptions`      | object         | Optional     |
| `bundle`            |                | Optional     |
| `description`       | string         | Optional     |
| `environment`       |                | Optional     |
| `minify`            | string         | Optional     |
| `outputPath`        | string         | **Required** |
| `parts`             |                | Optional     |
| `targetClass`       | string         | Optional     |
| `type`              | string         | **Required** |
| `typescript`        | boolean,string | Optional     |
| `uri`               | string         | Optional     |
| `writeCompileInfo`  | boolean        | Optional     |

#### addCreatedAt

If true, this will cause every object to have a hidden property called \$\$createdAt which points to an object
containing filename, lineNumber, and column properties.

`addCreatedAt`

- is optional
- type: `boolean`

##### addCreatedAt Type

`boolean`

#### application-names

The application names which this target supports

`application-names`

- is optional
- type: `string[]`

##### application-names Type

Array type: `string[]`

All items must be of the type: `string`

#### application-types

The application types which this target supports

`application-types`

- is optional
- type: `string[]`

##### application-types Type

Array type: `string[]`

All items must be of the type: `string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(browser%7Cnode%7Crhino)%24>)):

```regex
^(browser|node|rhino)$
```

#### babelOptions

Options given to @babel/preset-env. With this options the output type of babel can be defined. For details see here:
<https://babeljs.io/docs/en/babel-preset-env#options>. They can be overridden per target.

`babelOptions`

- is optional
- type: `object`

##### babelOptions Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### bundle

`bundle`

- is optional
- type: reference

##### bundle Type

- []() – `#/properties/bundle`

#### description

A description of the target's function.

`description`

- is optional
- type: `string`

##### description Type

`string`

#### environment

`environment`

- is optional
- type: reference

##### environment Type

- []() – `#/properties/environment`

#### minify

Determines the minification to be used for applications, if the target supports it; can be overridden on a per
application basis. Can be off, minify, mangle, or beautify.

`minify`

- is optional
- type: `string`

##### minify Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(off%7Cminify%7Cmangle%7Cbeautify)%24>)):

```regex
^(off|minify|mangle|beautify)$
```

#### outputPath

The folder where the compilation outputs to, and will be created if it does not already exist

`outputPath`

- is **required**
- type: `string`

##### outputPath Type

`string`

#### parts

`parts`

- is optional
- type: reference

##### parts Type

- []() – `#/properties/parts`

#### targetClass

If you want to use more than the two default target types and/or use custom target classes, you can use the targetClass
key to supply the name of the class as a string.

`targetClass`

- is optional
- type: `string`

##### targetClass Type

`string`

#### type

Either `source`, `build`, or a class name in qooxdoo-compiler; using a class name is advanced usage, but ultimately the
standard names just shortcuts to class names anyway (`source` is `qx.tool.compiler.targets.SourceTarget`, etc)

`type`

- is **required**
- type: `string`

##### type Type

`string`

#### typescript

When true, output the typescript definition into ``./compiled/source/qooxdoo.d.ts`. If you use a string instead of
true, the string is the name of the file which is generated inside the target output directory

`typescript`

- is optional
- type: multiple

##### typescript Type

Unknown type `boolean,string`.

```json
{
  "type": ["boolean", "string"],
  "description": "When true, output the typescript definition into ``./compiled/source/qooxdoo.d.ts`. If you use a string instead of true, the string is the name of the file which is generated inside the target output directory",
  "simpletype": "multiple"
}
```

#### uri

this sets the URI used to access the target output directory, i.e. the directory which will contain resources/ and
transpiled/

`uri`

- is optional
- type: `string`

##### uri Type

`string`

#### writeCompileInfo

if true, the target will write a compile-info.json and resources.json into the application's output directory,
containing the data structures required to generate an application

`writeCompileInfo`

- is optional
- type: `boolean`

##### writeCompileInfo Type

`boolean`

## writeAllTranslations

By default, only translation strings which are used by the classes are included into the application.

`writeAllTranslations`

- is optional
- type: `boolean`
- defined in this schema

### writeAllTranslations Type

`boolean`
