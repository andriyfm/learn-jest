// NOTE: If you want to test wheather a particular function thorows an error when it's called, use toThrow().
// NOTE: The function that throws an execption needs to be invoked within a wrapping function otherwise the toThrow() assertion will faill.

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
  // return 'wow'
}

test("compiling android goes as expected", () => {
//   expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    // expect(()=>compileAndroidCode()).toThrow('you are using the wrong JDK')
    expect(()=>compileAndroidCode()).toThrow(/JDK/)
});

