module.exports = {
  name: "gsheets",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/gsheets",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
