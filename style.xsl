<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<body>

<h2 align="center">ShopEase Product Catalogue</h2>

<table border="1" align="center" cellpadding="8">

<tr bgcolor="navy">
<th><font color="white">Product Name</font></th>
<th><font color="white">Category</font></th>
<th><font color="white">Price</font></th>
<th><font color="white">Brand</font></th>
<th><font color="white">Availability</font></th>
</tr>

<xsl:for-each select="PRODUCTS/ITEM">
<tr>
<td><xsl:value-of select="product_name"/></td>
<td><xsl:value-of select="Category"/></td>
<td>₹ <xsl:value-of select="Price"/></td>
<td><xsl:value-of select="Brand"/></td>
<td><xsl:value-of select="Availability"/></td>
</tr>
</xsl:for-each>

</table>

</body>
</html>

</xsl:template>
</xsl:stylesheet>