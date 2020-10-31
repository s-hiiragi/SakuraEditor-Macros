/**
 * @file     �I�𒆂̕ϐ������A�E�g�v�b�g�֏o�͂���}�N���ɓW�J����
 * author    s_hiiragi <https://github.com/s-hiiragi>
 * @version  1.0
 */

(function(){
	var inputStr;

	if (Editor.IsTextSelected() == 0) {
		inputStr = Editor.InputBox('�ϐ���', '');
		if (!inputStr) return;
	} else {
		inputStr = Editor.GetSelectedString(0);
	}

	var code = "Editor.TraceOut('{1}: ' + {1});".replace(/\{1\}/g, inputStr);

	Editor.InsText(code);
})();
