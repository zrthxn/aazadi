module.exports = {
  name: "features-api",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/features/api",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
