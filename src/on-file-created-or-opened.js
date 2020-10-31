/**
 * @file  �t�@�C���V�K�쐬or�I�[�v������on-file-created/opened�t�H���_�ȉ��̃}�N�������s
 */

// TODO �ǂݍ��񂾃��W���[������f�[�^���G�N�X�|�[�g������
function load(relativeModulePath) {
	var fso = new ActiveXObject('Scripting.FileSystemObject');
	var macroDir = fso.GetParentFolderName(Editor.ExpandParameter('$M'));
	var absoluteModulePath = fso.GetAbsolutePathName(fso.BuildPath(macroDir, relativeModulePath));
	var textFile;
	try {
		textFile = fso.OpenTextFile(absoluteModulePath);
	} catch (e) {
		Editor.TraceOut('[E] load(): file open failed: ' + e.message + ': ' + absoluteModulePath);
		throw e;
	}
	var code = textFile.ReadAll();
	try {
		// �O���[�o���ϐ��͏㏑���ł���
		eval(code);
	} catch (e) {
		Editor.TraceOut('[E] load(): eval() failed: ' + e.message + ': ' + absoluteModulePath);
		throw e;
	}
}

// �t�@�C���ۑ���A�����肵�悤�Ǝv���΂ł����� (Cookie���g��)

// TODO �f�B���N�g�����̑S*.js��ǂݍ���
if (Editor.GetFilename() == '') {
	//load('on-file-created/hello.js');
	load('on-file-created/newtab_to_file.js');
} else {
	//load('on-file-opened/hello.js');
}
