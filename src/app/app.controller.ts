import { Controller, Get, Post } from "@nestjs/common";

@Controller({})
export class AppController {
  @Get()
  getUser() {
    return { name: "Ucheckio Akhemiencda", country: "Angolia" };
  }

  @Post()
  store() {
    return "Post request successful";
  }
}
