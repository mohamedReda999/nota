// اختيار العناصر من DOM باستخدام معرفها
var mainHeading = document.getElementById("mainHeading");
var changeTextButton = document.getElementById("changeTextButton");
var toggleHighlightButton = document.getElementById("toggleHighlightButton");

// إضافة حدث استماع (event listener) للزر لتغيير نص العنوان
changeTextButton.addEventListener("click", function() {
    mainHeading.textContent = "تم تغيير النص!";
});

// إضافة حدث استماع (event listener) للزر لتبديل التمييز
toggleHighlightButton.addEventListener("click", function() {
    // التحقق مما إذا كانت العنصر مميزًا بالفعل
    if (mainHeading.classList.contains("highlight")) {
        // في حال كان مميزًا، قم بإزالة التمييز
        mainHeading.classList.remove("highlight");
    } else {
        // إذا لم يكن مميزًا، قم بإضافة التمييز
        mainHeading.classList.add("highlight");
    }
});