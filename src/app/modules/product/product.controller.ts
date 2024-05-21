import { Request, Response } from 'express'
import { productServices } from './product.services'

// !Create Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body
    const result = await productServices.saveProductIntoDB(productData)
    if (result._id) {
      res.status(200).json({
        success: true,
        message: 'Product created successfully!',
        data: result,
      })
    } else {
      res.status(400).json({
        success: true,
        message: 'Product created Unsuccessfully!',
        data: result,
      })
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: 'There is a problem with the server',
    })
  }
}

// !Get all Products And search Products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string | undefined

    const result = await productServices.getAllProductIntoDB(searchTerm)
    if (searchTerm && result.length > 0) {
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      })
    } else if (result.length > 0) {
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Products Not Found!',
        data: null,
      })
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: 'There is a problem with the server',
    })
  }
}

// ! Get Single Product By ID
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productID = req.params.productId as string
    const result = await productServices.getSingleProductIntoDB(productID)
    if (result !== null) {
      res.status(200).json({
        success: true,
        message: 'Product fetched successfully!',
        data: result,
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'There is no Products data here',
        data: null,
      })
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: 'There is a problem with the server',
    })
  }
}

// ! Update Product Quantity By Product Id
const updateProduct = async (req: Request, res: Response) => {
  try {
    const productID = req.params.productId as string
    const result = await productServices.updateProductIntoDB(productID)
    if (result !== null) {
      res.status(200).json({
        success: true,
        message: 'Product updated successfully!',
        data: result,
      })
    } else {
      res.status(400).json({
        success: true,
        message: 'Product updated Unsuccessfully!',
        data: null,
      })
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: 'There is a problem with the server',
    })
  }
}

// ! Delete Product By ID
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const productID = req.params.productId as string
    const result = await productServices.deleteSingleProductIntoDB(productID)
    if (result?.deletedCount > 0) {
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
        data: null,
      })
    } else {
      res.status(400).json({
        success: true,
        message: 'Product deleted Unsuccessfully!',
        data: null,
      })
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: 'There is a problem with the server',
    })
  }
}

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteSingleProduct,
}
