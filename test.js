// 创建按钮元素
var button = document.createElement("button");
button.id = "floatingButton";
button.textContent = "获取文字内容";

// 添加按钮样式
button.style.position = "fixed";
button.style.top = "50%";
button.style.left = "50%";
button.style.transform = "translate(-50%, -50%)";
button.style.padding = "10px 20px";
button.style.backgroundColor = "#007bff";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.zIndex = "9999"; // 设置按钮在最上层显示

// 将按钮添加到页面
document.body.appendChild(button);

// 绑定按钮点击事件
button.addEventListener("click", function() {
    var elements = document.getElementsByClassName("font-size-18 text-grey-darken-3 font-weight-bold");
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i].textContent);
    }
});














// 创建按钮元素
var button = document.createElement("button");
button.id = "floatingButton";
button.textContent = "获取文字内容";

// 添加按钮样式
button.style.position = "fixed";
button.style.top = "50%";
button.style.left = "50%";
button.style.transform = "translate(-50%, -50%)";
button.style.padding = "10px 20px";
button.style.backgroundColor = "#007bff";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.zIndex = "9999"; // 设置按钮在最上层显示

// 将按钮添加到页面
document.body.appendChild(button);

// 初始化 clipboard.js
var clipboard = new ClipboardJS(button, {
    text: function() {
        var elements = document.getElementsByClassName("font-size-18 text-grey-darken-3 font-weight-bold");
        var textContents = [];
        for (var i = 0; i < elements.length; i++) {
            textContents.push(elements[i].textContent);
        }
        return textContents.join("\n");
    }
});

// 添加成功后的提示
clipboard.on('success', function(e) {
    console.log("已复制到剪贴板:", e.text);
    alert("已复制以下内容到剪贴板:\n\n" + e.text);
});

// 添加失败后的提示
clipboard.on('error', function(e) {
    console.error("复制到剪贴板失败:", e.trigger);
});
