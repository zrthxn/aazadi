module.exports = {
  name: "gmailer",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/gmailer",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
