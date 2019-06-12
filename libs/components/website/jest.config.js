module.exports = {
  name: "components-website",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/components/website",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
