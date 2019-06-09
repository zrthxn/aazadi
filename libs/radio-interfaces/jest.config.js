module.exports = {
  name: "radio-interfaces",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/radio-interfaces",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
