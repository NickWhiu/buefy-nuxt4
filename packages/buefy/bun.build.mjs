import fs from 'node:fs'
import path from 'node:path'
import pack from '../../package.json' with { type: 'json' }

const bannerTxt = `/*! Buefy v${pack.version} | MIT License | github.com/buefy/buefy */`

const baseFolder = './src/'
const componentsFolder = 'components/'

const components = fs
    .readdirSync(baseFolder + componentsFolder)
    .filter((f) =>
        fs.statSync(path.join(baseFolder + componentsFolder, f)).isDirectory()
    )

const entries = {
    index: './src/index.ts',
    helpers: './src/utils/helpers.ts',
    config: './src/utils/ConfigComponent.ts',
    ...components.reduce((obj, name) => {
        obj[name] = (baseFolder + componentsFolder + name + `/index.ts`)
        return obj
    }, {})
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const isMinify = process.env.MINIFY === 'true' || process.argv.includes('minify')

console.log('Building Buefy with Bun' + (isMinify ? ' (minified)' : ''))

const common = {
  target: 'browser',
  external: ['vue'],
  minify: isMinify,
}

async function build() {
  // ESM build for all entries (produces tree-shakable modules)
  await Bun.build({
    entrypoints: Object.values(entries),
    outdir: 'dist/esm',
    format: 'esm',
    ...common
  })

  // CJS build for all entries
  await Bun.build({
    entrypoints: Object.values(entries),
    outdir: 'dist/cjs',
    format: 'cjs',
    ...common
  })

  // Main UMD for browser
  await Bun.build({
    entrypoints: ['src/index.ts'],
    outfile: 'dist/buefy.js',
    format: 'iife',
    globalName: 'Buefy',
    banner: bannerTxt,
    ...common
  })

  // Main ESM single file
  await Bun.build({
    entrypoints: ['src/index.ts'],
    outfile: 'dist/buefy.esm.js',
    format: 'esm',
    banner: bannerTxt,
    ...common
  })

  // Individual components as UMD for legacy support
  for (const name of components) {
    await Bun.build({
      entrypoints: [baseFolder + componentsFolder + `${name}/index.ts`],
      outfile: `dist/components/${name}/index.js`,
      format: 'iife',
      globalName: capitalize(name),
      banner: bannerTxt,
      ...common
    })
  }

  if (isMinify) {
    console.log('Minification applied to builds')
  }

  console.log('Bun build completed successfully. dist/ generated with ESM, CJS, UMD bundles.')
}

if (import.meta.main) {
  build().catch((err) => {
    console.error('Build failed:', err)
    process.exit(1)
  })
}

export default build
