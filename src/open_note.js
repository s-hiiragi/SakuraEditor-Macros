/**
 * @file �m�[�g���J��
 *
 * TODO �m�[�g��ʖ��ŊJ������
 */

function trimExtension(path) {
    return path.replace(/\.[^\.]+$/, '');
}

(function(){

    var wsh = new ActiveXObject('WScript.Shell');
    var noteDirPath = wsh.ExpandEnvironmentStrings('%MY_MANAGED_PATH%\\note');

	var noteName = Editor.InputBox('�m�[�g��', '', 100);
	if (!noteName) return;

    var files = [];
    var fso = new ActiveXObject('Scripting.FileSystemObject');
    var noteDir = fso.GetFolder(noteDirPath);
    for (var e = new Enumerator(noteDir.Files); !e.atEnd(); e.moveNext()) {
        var f = e.item();
        files.push(f);
    }

    var notePath = null;

    // ���S��v
    // �������A
    // - �啶��/�������͋�ʂ��Ȃ�
    // - �g���q�Ȃ��Ŕ�r����
    for (var i = 0; i < files.length; i++) {
        var f = files[i];
        if (noteName.toLowerCase() === trimExtension(f.Name.toLowerCase())) {
            notePath = f.Path;
            break;
        }
    }
    if (!notePath) {
        // �O����v
        for (var i = 0; i < files.length; i++) {
            var f = files[i];
            if (f.Name.toLowerCase().indexOf(noteName.toLowerCase()) === 0) {
                notePath = f.Path;
                break;
            }
        }
    }

    if (notePath) {
        Editor.FileOpen(notePath);
    } else {
    	if (!/\.[^.]+$/.test(noteName)) {
    		noteName += '.md';
    	}
    	var notePath = fso.BuildPath(noteDirPath, noteName);
    	Editor.FileOpen(notePath, 4/*UTF-8*/);
    }

})();
