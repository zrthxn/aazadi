module.exports = {
  name: "components-radio",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/components/radio",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
