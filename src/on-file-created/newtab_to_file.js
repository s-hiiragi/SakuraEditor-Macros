/**
 * ������
 */

(function(){

	var fso = new ActiveXObject('Scripting.FileSystemObject');

	var newTabDir = 'C:\\Users\\hii\\managed\\data\\src\\sakura_editor_macros\\src\\on-file-created\\.newtab_cache';
	if (!fso.FolderExists(newTabDir)) {
		fso.CreateFolder(newTabDir);
	}

	var newTabFile;
	for (var i = 0; i < 32; i++) {
		var path = fso.BuildPath(newTabDir, '����_' + (i+1));
		if (!fso.FileExists(path)) {
			newTabFile = path;
			break;
		} else {
			var f;
			try {
				f = fso.OpenTextFile(path, 2/*ForWriting*/);
				// �J����=�G�f�B�^�ł͊J���Ă��Ȃ�
				f.Close();
				newTabFile = path;
				break;
			} catch (e) {
				// �J���Ȃ�=�G�f�B�^�ŊJ���Ă���
				if (f) f.Close();
			}
		}
	}
	if (newTabFile) {
		Editor.FileSaveAs(newTabFile, 4/*UTF-8*/, 1/*CRLF*/);
	}

})();