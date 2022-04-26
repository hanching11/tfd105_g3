<?php

    include ("./connect.php");


    $sql = "SELECT * from product";
    

    $stmt = $dsn_link->prepare($sql);
    $stmt->execute(array());
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
   

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>product</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="shortcut icon" href="./img/logo_icon.png">
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
    crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Ashopping_cart%3A">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossorigin="anonymous">
    </script>


</head>
<body>
    <div class="wrapper_melon">
        <div class="header_potter">
            <div class="logo">
                <img src="../img/logo_icon.png" alt="logo" >
            </div>
            <div class="con_h6">
                <h6>帳號登出</h6>
            </div>
        </div>
        <section class="sideLeft">
            <div class="content_left">
                <h6 class="wd-border">後臺管理</h6>
                <aside class="side_left">
                    <ul>
                        <ol>
                            <a href="../b_member.html">會員管理</a>
                        </ol>
                        <ol>
                            <a href="../b_order.html">訂單管理</a>
                        </ol>
                        <ol>
                            <a href="#" id="b_color_label" id="b_color_label">商品管理</a>
                        </ol>
                        <ol>
                            <a href="../b_item_exhibits.html">展品管理</a>
                        </ol>
                        <ol>
                            <a href="../b_discount.html">折扣碼管理</a>
                        </ol>
                    </ul>
                </aside>
            </div>
            <div class="sideRight">
                <div class="channel-around">
                    <div class="page_title2">
                        <h6>商品管理</h6>
                    </div>   
                    <ul class="list_co btn-group" role="group">
                        <li>
                            <button type="button" class="btn btn-primary" name="up">上架</button>
                            <input type="hidden" name="action" value="up">
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary" name="down">下架</button>
                            <input type="hidden" name="action" value="down">
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#product_newBackdrop" name="plus">新增</button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary">刪除</button>
                        </li>
                    </ul>
                </div>
                <div class="table_product">
                    <table class="table  align-middle table-striped data-table">
                        <thead>
                            <tr class="table_color">
                                <th>#</th>
                                <th>商品編號</th>
                                <th>封面</th>
                                <th>名稱</th>
                                <th>簡介</th>
                                <th>價格</th>
                                <th>數量</th>
                                <th>產品作家</th>
                                <th>商品狀態</th> 
                                <th>編輯</th>  
                            </tr>
                        </thead>
                        <tbody>
                           
                            <?php 
                                foreach ($data as $data) {
                            ?>    
                            <tr>
                                <th class="align-middle">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                        </label>
                                    </div>
                                </th>
                                <td class="align-middle"><?php echo $data ['product_id']?></td>
                                <td class="align-middle"><img src="<?php echo $data['product_img'];?>" class="product_photo"></td>                                   
                                <td class="align-middle word-nowrap text_center"><?php echo $data ['product_name']?></td>
                                <td class="align-middle text_center text_heigh"><?php echo $data ['product_intro']?></td>
                                <td class="align-middle"><?php echo $data ['product_price']?></td>
                                <td class="align-middle"><?php echo $data ['product_count']?></td>
                                <td class="align-middle word-nowrap"><?php echo $data ['product_artist']?></td>
                                <td class="align-middle">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input status_toggle" name="product_status" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                                        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                                    </div>
                                </td>
                                <td class="align-middle">
                                    <button type="button" class="btn btn-primary word-nowrap edit_data" data-bs-toggle="modal" data-bs-target="#product_editBackdrop" id="edit" value="<?php echo $row['product_id'] ?>">檢視</button>
                                </td>
                            </tr>
                            <?php 
                            }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>                 
        </section>
               <!-- 新增商品視窗 ------------->

        <!-- ------------------------------ -->
        <section>
            <div class="modal fade" id="product_newBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title" id="exampleModalLabel">新增商品</h6>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form method="POST" action="./b_product_insert.php" enctype="multipart/form-data" style="overflow: scroll;"> 
                            <div class="modal-body" id="editView">
                                <!-- 新增商品名稱 -->
                                <div class="form-group">
                                    <label for="product_newtitle"></label>
                                    <input type="text" id="product_newtitle" name="title" class="form-control" placeholder="商品名稱">
                                </div>
                                <!-- 新增商品作家 -->
                                <div class="form-group option_spacing">
                                    <select name="artist">
                                        <option>請選擇作者</option>
                                        <option value="Vincent van Gogh">Vincent van Gogh</option>
                                        <option value="Pablo Ruiz Picass">Pablo Ruiz Picasso</option>
                                        <option value="Oscar-Claude Mone">Oscar-Claude Monet</option>
                                        <option value="Leonardo da Vinci">Leonardo da Vinci</option>
                                    </select>
                                </div>
                                <!-- 新增商品價格、數量 -->
                                <div class="form-group level">
                                    <div class="input-borad">
                                        <label for="product_newPrice"></label>
                                        <input type="text" id="product_newPrice" name="price" class="form-control" placeholder="價格">
                                    </div>
                                    <div class="input-borad">
                                        <label for="product_newCount"></label>
                                        <input type="text" id="product_newCount" name="quantity" class="form-control" placeholder="數量">
                                    </div>
                                </div>
                                <!-- 新增商品描述 -->
                                <div class="form-group input-borad">
                                    <label for="product_newDescribe"></label>
                                    <textarea id="product_newDescribe" rows="3" cols="40" name="describe" placeholder="展品描述"></textarea>
                                </div>
                                <!-- 新增商品檔案上傳 -->
                                <div class="form-check form-check-borad">
                                    <div class="form-group file-borad">
                                        <input type="file"  name="file[]"  class="form-control" multiple="multiple">
                                        <div>  
                                            <img class="preview">
                                        <div class="preview_size"></div>
                                    </div>
                                </div>
                                <div class="form-group"> 
                                    <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" name="status">
                                    <label class="form-check-label" for="flexCheckDefault">
                                    <h6>此產品是否直接上架</h6>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-secondary" data-bs-dismiss="modal" value="關閉">
                                <input type="submit" class="btn btn-primary" value="儲存">
                                <input name="action" type="hidden" value="add">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- 編輯與查看視窗----------------------- -->

        <!-- ------------------------------------------- -->
        <section>  
            <!-- Modal -->
            <div class="modal fade" id="product_editBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title" id="exampleModalLabel">編輯商品</h6>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form method="POST" action="#" id="upData" enctype="multipart/form-data" style="overflow: scroll;" onSubmit="return checkForm();">
                            <div class="modal-body" id="info_update">
                                <!-- 商品編號 -->
                                <div class="form-group">
                                    <label for="product_editNumber"></label>
                                    <input type="hidden" id="product_editNumber" name="edit_number" class="form-control" value="">
                                </div>
                                <!-- 編輯商品名稱 -->
                                <div class="form-group">
                                    <label for="product_editName"></label>
                                    <input type="text" id="edit_name" name="edit_name" class="form-control" value="<?php echo $edit_name ?>">
                                </div>
                                <!-- 編輯商品作家 -->
                                <div class="form-group option_spacing">
                                    <select name="edit_artist" value="">
                                        <option>請選擇作者</option>
                                        <option value="a1">Vincent van Gogh</option>
                                        <option value="a2">Pablo Ruiz Picasso</option>
                                        <option value="a3">Oscar-Claude Monet</option>
                                        <option value="a4">Leonardo da Vinci</option>
                                    </select>
                                </div>
                                <!-- 編輯商品數量；價格 -->
                                <div class="form-group level">
                                    <div class="input-borad">
                                        <label for="product_editPrice"></label>
                                        <input type="text" id="product_editPrice" name="edit_price" class="form-control" value="">
                                    </div>
                                    <div class="input-borad">
                                        <label for="product_editCount"></label>
                                        <input type="text" id="product_editCount" name="edit_quantity" class="form-control" value="">
                                    </div>
                                </div>
                                <!-- 編輯商品描述 -->
                                <div class="form-group input-borad">
                                    <label for="product_editDescribe"></label>
                                    <textarea id="product_editDescribe" rows="3" cols="40" name="edit_describe" value=""></textarea>
                                </div>
                                <!-- 編輯商品檔案 -->
                                <div class="form-check form-check-borad">
                                    <div class="form-group file-borad">
                                        <input type="file"  name="edit_file"  class="form-control" multiple="multiple" value="">
                                        <div>  
                                            <img class="preview1">
                                        <div class="preview_size"></div>
                                    </div>
                                </div>
                                <div class="form-group"> 
                                    <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" name="edit_status">
                                    <label class="form-check-label" for="flexCheckDefault">
                                    <h6>此產品是否直接上架</h6>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                                <button type="submit" class="btn btn-primary">儲存</button>
                                <input name="action" type="hidden" value="update">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <script type="text/javascript">
        $(document).ready(function(){

            $(document).on("click", "#edit", function(e){

                e.preventDefault();
                
                var edit_id = $(this).attr('value');

                $.ajax({
                    url:"fetch.php",
                    type:"post",
                    data:{edit_id:edit_id},
                    success:function(data){
                        $("#info_update").html(data);
                        $("#editView").modal('show');
                    }
                });
            });
            
        })

     
  
    </script>
    
</body>
</html>
