热加载 在 开启热加载的时候发生改变自动替换无需刷新浏览器

项目中 按钮按下时没有改变
发生这种情况是因为按钮的onclick事件处理程序仍然绑定到原始printMe函数。

要使这与HMR一起使用，我们需要使用以下命令更新对新printMe函数的绑定module.hot.accept：

- document.body.appendChild(component());
+ let element = component(); // Store the element to re-render on print.js changes
+ document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
-     printMe();
+     document.body.removeChild(element);
+     element = component(); // Re-render the "component" to update the click handler
+     document.body.appendChild(element);
    })
  }