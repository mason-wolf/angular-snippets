import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(event) {

    const file:File = event.target.files[0]

      const formData = new FormData();
      formData.append("file_to_upload", file, file.name);
      console.log(formData.get('file_to_upload'));

      // this.fileService.uploadFile(formData).subscribe(res => {
      //   console.log(res);
      // })

      // Python Snippet
      // @dashboard_blueprint.route('/api/uploadFile', methods=['POST'])
      // def uploadFile():
      // try:
      //     file = request.files['file_to_upload']
      //     res = uploadFile(file)
      // except Exception as e:
      //     traceback.print_exc()
      // return jsonify(res)
  }


}
