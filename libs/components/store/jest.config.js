module.exports = {
  name: "components-store",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/components/store",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
