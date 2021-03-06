import banner from 'rollup-plugin-banner';

export default {
  input: './src/index.js',
  output: [
    {
        file: './build/firestore-ref.umd.js',
        format: 'umd',
        name: 'firestoreRef'
    }
  ],
  plugins: [
    banner('firestore-ref v<%= pkg.version %> by <%= pkg.author %>'),
  ],
  external: ['firebase']
};