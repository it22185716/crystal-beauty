import product from "../models/product.js";


export async function createProdct(req, res) {
    // Fixed incorrect condition (req, user == null) -> (!req.user)
    if (!req.user) {
        res.status(403).json({
            message: "You need to login first"
        });
        return;
    }
    
    // Used strict comparison (!== instead of !=) for better reliability
    if (req.user.role !== "admin") {
        res.status(403).json({
            message: "You are not authorized to create a product"
        });
        return;
    }

    const newProduct = new product(req.body);

    try{
        await newProduct.save()
        res.json({
            message:"product saved successfully"
        })

    }catch(err){
        res.status(500).json({
            message:"product not saved"
        })
    }
    
}

export function getProducts(req,res){
    Product.find().then(
        (products)=>{
            res.json(products)
        }
    ).catch (
        (err)=>{
            res.status(500).json({
                message :"product not found"
            })
        }
    )
}
export function deleteProduct(req,res){
    if(req.user == null){
        res.status(403).json({
            message : "you are not athorized to delete a product"
        })
        return;
    }
    product.findOneAndDelete({
        productId : req.params.productId
    }).then(
        ()=>{
            res.json({
                message : "product deleted successfully"
            })
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message : "product not deleted"
            })
        }
    )
    
}
/*export function updateProduct(re,res){
    if(req.user == null){
        res.status(403).json({
            message : "ypu need to login first"
        })
        return;
    }
    if(req.user.role != "admin"){
        res.status(403).json({
            message : "Your not authorized to update a product"
        })
        return;
    }
    product.findByIdAndUpdate({
        productId: req.params.productId
    },req.body).then(
        ()=>{
            res.json({
                message : "product updated successfully"
            })
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message : "product not updated"
            })
        }
    )
    


}*/
export function updateProduct(req,res){
    if(req.user == null){
        res.status(403).json({
            message : "You need to login first"
        })
        return;
    }

    if(req.user.role != "admin"){
        res.status(403).json({
            message : "You are not authorized to update a product"
        })
        return;
    }

    product.findOneAndUpdate({
        productId : req.params.productId
    },req.body).then(
        ()=>{
            res.json({
                message : "Product updated successfully"
            })
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message : "Product not updated"
            })
        }
    )
}
