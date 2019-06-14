module.exports = {
  name: "features-shared",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/features/shared",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
