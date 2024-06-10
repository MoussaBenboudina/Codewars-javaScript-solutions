function well(x) {
  return x.filter((e) => e == "good").length > 2
    ? "I smell a series!"
    : x.filter((e) => e == "good").length > 0
    ? "Publish!"
    : "Fail!";
}
